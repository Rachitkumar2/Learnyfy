import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [openSection, setopenSection] = useState({});

  const {
    allCourses,
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,currency
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    if (allCourses.length > 0) {
      const findCourse = allCourses.find((course) => course._id === id);
      setCourseData(findCourse);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses, id]);

  const toggleSection = (index) => {
    setopenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return courseData ? (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-200 via-cyan-100 to-purple-100">
        <div className="flex md:flex-row flex-col-reverse gap-10 items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left relative z-10">
          {/* left column */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {courseData?.courseTitle || "Course Title"}
            </h1>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html:
                  courseData?.courseDescription?.slice(0, 200) + "..." ||
                  "Course description will appear here...",
              }}
            ></p>

            {/* review and rating */}
            <div className="flex items-center space-x-2 pt-3 pb-1  mb-3">
              <p>{calculateRating(courseData)}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.floor(calculateRating(courseData))
                        ? assets.star
                        : assets.star_blank
                    }
                    alt=""
                    className="w-3.5 h-3.5"
                  />
                ))}
              </div>
              <p className="text-gray-500">
                ({courseData?.courseRatings?.length || 0})
              </p>
            </div>
            <p className="text-sm">
              Course By <span className="text-blue-600 underline">John</span>
            </p>

            <div className="pt-8 text-gray-800">
              <h2 className="text-xl font-semibold ">Course Structure</h2>

              <div className="pt-5 ">
                {courseData.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white mb-2 rounded"
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-2">
                        <img className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`}
                         src={assets.down_arrow_icon} alt="arrow icon" />
                        <p className="font-medium md:text-base text-sm">
                          {chapter.chapterTitle}
                        </p>
                      </div>
                      <p className="text-sm md:text-default">
                        {chapter.chapterContent.length} lectures -{" "}
                        {calculateChapterTime(chapter)}
                      </p>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSection[index] ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                        {chapter.chapterContent.map((lecture, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 py-1"
                          >
                            <img
                              src={assets.play_icon}
                              alt="play_icon"
                              className="w-4 h-4 mt-1"
                            />
                            <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                              <p>{lecture.lectureTitle}</p>
                              <div className="flex gap-2">
                                {lecture.isPreviewFree && (
                                  <p className="text-blue-500 cursor-pointer">
                                    Preview
                                  </p>
                                )}
                                <p>
                                  {humanizeDuration(
                                    lecture.lectureDuration * 60 * 1000,
                                    { units: ["h", "m"] }
                                  )}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              <div className=" text-sm md:text-default">
                <h3 className="text-xl font-semibold text-gray-800 mt-10 ">Course Description</h3>
                 <p
              className="text-gray-600 pt-3"
              dangerouslySetInnerHTML={{
                __html:
                  courseData.courseDescription}}></p>
              </div>

          </div>
          {/* right column */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg min-h-64 md:rounded-none overflow-hidden min-w-[300px] sm:mim-w-[420px]">
            <img className="rounded-md" src={courseData.courseThumbnail} alt="" />
            <div className="p-5">
              <div className="flex items-center gap-2">
                <img className=" w-3.5"src={assets.time_left_clock_icon} alt="" />
                <p className="text-red-500"><span className="font-medium">5 days</span> Left at this price!</p>
              </div>
              <div className="flex gap-3 items-center pt-2">
                <p className="text-gray-800 md:text-4xl text-2xl font-semibold">{currency} {(courseData.coursePrice - courseData.discount*courseData.coursePrice /100).toFixed(2)}</p>
                <p className="md:text-lg text-gray-500 line-through">{currency} {courseData.coursePrice}</p>
      
              </div>
              <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <img src={assets.star} alt="" />
                  <p>{calculateRating(courseData)}</p>
                </div>
                
                <div className="h-4 w-px bg-gray-500/40"></div>
                
                <div className="flex items-center gap-1">
                  <img src={assets.time_clock_icon} alt="" />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
                
                <div className="h-4 w-px bg-gray-500/40"></div>
                
                <div className="flex items-center gap-1">
                  <img src={assets.lesson_icon} alt="" />
                  <p>{calculateNoOfLectures(courseData)} lessons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;

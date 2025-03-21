import React, { useState } from "react";
import ListItem from "./ListItem";

function ListOfCourses() {
  const [courses, setCourses] = useState([
    {
      $collectionId: "67150b750016dff76b2e",
      $createdAt: "2024-11-03T05:14:44.505+00:00",
      $databaseId: "67150b58000821ac8c8f",
      $id: "672706c30001af16ac1d",
      $permissions: (3)[
        ('read("user:671ded9a003cee3f8cee")',
        'update("user:671ded9a003cee3f8cee")',
        'delete("user:671ded9a003cee3f8cee")')
      ],
      $updatedAt: "2024-11-07T04:59:24.911+00:00",
      author:
        "Rafael Irizarry Professor of Biostatistics, T.H. Chan School of Public Health",
      category: "data science",
      description:
        "Build a movie recommendation system and learn the science behind one of the most popular and successful data science techniques.",
      duration: "8 weeks, 2–4 hours per week",
      image: "67270786002c205dacdd",
      keywords: "data science",
      link: "https://www.edx.org/learn/machine-learning/harvard-university-data-science-machine-learning",
      name: "HarvardX: Data Science: Machine Learning",
      platform: "edX",
      price: 0,
      uploaded: "October 16, 2024",
      wishlisted: false,
    },
    {
      $collectionId: "67150b750016dff76b2e",
      $createdAt: "2024-11-05T15:40:03.185+00:00",
      $databaseId: "67150b58000821ac8c8f",
      $id: "672a3c5200007a1bd38e",
      $permissions: (3)[
        ('read("user:671ded9a003cee3f8cee")',
        'update("user:671ded9a003cee3f8cee")',
        'delete("user:671ded9a003cee3f8cee")')
      ],
      $updatedAt: "2024-11-07T15:25:44.548+00:00",
      author: "David J. Malan",
      category: "programming",
      description:
        "A gentle introduction to programming that prepares you for subsequent courses in coding.",
      duration: "3 weeks, 2 - 6 hours per week",
      image: "672a3c4c003672ee6931",
      keywords: "programming",
      link: "https://www.edx.org/learn/scratch-programming/harvard-university-cs50-s-introduction-to-programming-with-scratch",
      name: "CS50's Introduction to Programming with Scratch",
      platform: "edX",
      price: 0,
      uploaded: "May 1, 2021",
      wishlisted: false,
    },
  ]);

  return (
    <>
      <div className="bg-neutral-800 h-svh">
        <div className=" ">
          <div className="w-full py-4">
            {courses
              ? courses.map((course) => {
                  return (
                    <div key={course.image}>
                      <ListItem course={course} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOfCourses;

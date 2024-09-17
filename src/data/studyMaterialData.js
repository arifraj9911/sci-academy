import gravity from "../assets/images/gravity.svg";
import electricly from "../assets/images/electricly.svg";
import ondD from "../assets/images/1d.svg";
import twoD from "../assets/images/2d.svg";

const studyMaterial = [
  {
    id: 1,
    course_title: "Gravity",
    description:
      "Understand the fundamental concept of gravity, its effects, and applications in the universe and everyday life.",
    icon: `${gravity}`,
    completion: "74%",
    duration: "30mins",
    readings: 43,
    enrolled: 400,
    videos: 22,
    assignments: 12,
    module: {
      module_no: "First Module",
      module_title: "Introduction to Gravity",
      module_content: [
        {
          c_title: "Basic Concepts of Gravity",
          c_videos: 5,
          c_readings: 12,
        },
        {
          c_title: "Newton's Laws",
          c_readings: 10,
        },
        {
          c_title: "Applications of Gravity",
          c_readings: 8,
          c_assignment: 2,
        },
      ],
    },
  },
  {
    id: 2,
    course_title: "Electricity",
    description:
      "Explore the principles of electricity, from basic circuits to real-world applications and energy systems.",
    icon: `${electricly}`,
    completion: "82%",
    duration: "30mins",
    readings: 40,
    enrolled: 500,
    videos: 24,
    assignments: 10,
    module: {
      module_no: "Second Module",
      module_title: "Electric Circuits",
      module_content: [
        {
          c_title: "Introduction to Circuits",
          c_videos: 6,
          c_readings: 11,
        },
        {
          c_title: "Circuit Components",
          c_readings: 9,
        },
        {
          c_title: "Advanced Circuit Analysis",
          c_readings: 7,
          c_assignment: 3,
        },
      ],
    },
  },
  {
    id: 3,
    course_title: "1D Motion",
    description:
      "Delve into the physics of motion in one dimension, covering speed, velocity, and acceleration with practical examples.",
    icon: `${ondD}`,
    completion: "69%",
    duration: "30mins",
    readings: 45,
    enrolled: 350,
    videos: 20,
    assignments: 11,
    module: {
      module_no: "Third Module",
      module_title: "Kinematics of 1D Motion",
      module_content: [
        {
          c_title: "Speed and Velocity",
          c_videos: 4,
          c_readings: 10,
        },
        {
          c_title: "Acceleration",
          c_readings: 10,
        },
        {
          c_title: "Practical Applications",
          c_readings: 7,
          c_assignment: 3,
        },
      ],
    },
  },
  {
    id: 4,
    course_title: "2D Motion",
    description:
      "Learn about two-dimensional motion, focusing on projectiles and circular motion with in-depth theoretical and practical examples.",
    icon: `${twoD}`,
    completion: "77%",
    duration: "30mins",
    readings: 50,
    enrolled: 420,
    videos: 25,
    assignments: 13,
    module: {
      module_no: "Fourth Module",
      module_title: "Projectiles and Circular Motion",
      module_content: [
        {
          c_title: "Projectile Motion",
          c_videos: 5,
          c_readings: 12,
        },
        {
          c_title: "Circular Motion",
          c_readings: 10,
        },
        {
          c_title: "Applications of 2D Motion",
          c_readings: 8,
          c_assignment: 4,
        },
      ],
    },
  },
  {
    id: 5,
    course_title: "Gravity",
    description:
      "Understand the fundamental concept of gravity, its effects, and applications in the universe and everyday life.",
    icon: `${gravity}`,
    completion: "74%",
    duration: "30mins",
    readings: 43,
    enrolled: 400,
    videos: 22,
    assignments: 12,
    module: {
      module_no: "First Module",
      module_title: "Introduction to Gravity",
      module_content: [
        {
          c_title: "Basic Concepts of Gravity",
          c_videos: 5,
          c_readings: 12,
        },
        {
          c_title: "Newton's Laws",
          c_readings: 10,
        },
        {
          c_title: "Applications of Gravity",
          c_readings: 8,
          c_assignment: 2,
        },
      ],
    },
  },
  {
    id: 6,
    course_title: "1D Motion",
    description:
      "Delve into the physics of motion in one dimension, covering speed, velocity, and acceleration with practical examples.",
    icon: `${ondD}`,
    completion: "69%",
    duration: "30mins",
    readings: 45,
    enrolled: 350,
    videos: 20,
    assignments: 11,
    module: {
      module_no: "Third Module",
      module_title: "Kinematics of 1D Motion",
      module_content: [
        {
          c_title: "Speed and Velocity",
          c_videos: 4,
          c_readings: 10,
        },
        {
          c_title: "Acceleration",
          c_readings: 10,
        },
        {
          c_title: "Practical Applications",
          c_readings: 7,
          c_assignment: 3,
        },
      ],
    },
  },
  {
    id: 7,
    course_title: "Electricity",
    description:
      "Explore the principles of electricity, from basic circuits to real-world applications and energy systems.",
    icon: `${electricly}`,
    completion: "82%",
    duration: "30mins",
    readings: 40,
    enrolled: 500,
    videos: 24,
    assignments: 10,
    module: {
      module_no: "Second Module",
      module_title: "Electric Circuits",
      module_content: [
        {
          c_title: "Introduction to Circuits",
          c_videos: 6,
          c_readings: 11,
        },
        {
          c_title: "Circuit Components",
          c_readings: 9,
        },
        {
          c_title: "Advanced Circuit Analysis",
          c_readings: 7,
          c_assignment: 3,
        },
      ],
    },
  },
  {
    id: 8,
    course_title: "2D Motion",
    description:
      "Learn about two-dimensional motion, focusing on projectiles and circular motion with in-depth theoretical and practical examples.",
    icon: `${twoD}`,
    completion: "77%",
    duration: "30mins",
    readings: 50,
    enrolled: 420,
    videos: 25,
    assignments: 13,
    module: {
      module_no: "Fourth Module",
      module_title: "Projectiles and Circular Motion",
      module_content: [
        {
          c_title: "Projectile Motion",
          c_videos: 5,
          c_readings: 12,
        },
        {
          c_title: "Circular Motion",
          c_readings: 10,
        },
        {
          c_title: "Applications of 2D Motion",
          c_readings: 8,
          c_assignment: 4,
        },
      ],
    },
  },
];

export default studyMaterial;

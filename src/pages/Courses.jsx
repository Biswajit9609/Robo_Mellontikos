import { useConfig } from '../hooks/useConfig';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
      <img 
        src={course.image || '/placeholder-course.jpg'} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{course.description}</p>
        
        <div className="mt-auto">
          {course.rating && (
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{course.rating}</span>
              {course.students && (
                <span className="text-gray-400 ml-2">({course.students} students)</span>
              )}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => window.open(course.couponFormUrl, '_blank')}
              className="flex-1 bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded transition-colors"
            >
              Request Coupon
            </button>
            <button
              onClick={() => window.open(course.url, '_blank')}
              className="flex-1 bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded transition-colors"
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const { config } = useConfig();

  return (
    <div className="min-h-screen cyber-grid-bg pt-24">
      <div className="container-max mx-auto px-4">
      <section className="text-center px-4 pb-20">
        <div className="container-max mx-auto">
          <h1 className="glitch-text text-5xl md:text-7xl font-black mb-6" data-text="COURSES">
            COURSES
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Access premium courses with exclusive coupons. Upgrade your skills in robotics, AI, and technology.
          </p>
        </div>
      </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {config.courses?.availableCourses?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {(!config.courses?.availableCourses || config.courses.availableCourses.length === 0) && (
          <div className="text-center py-12 mb-20">
            <p className="text-gray-400 text-lg">No courses available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
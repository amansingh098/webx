import React from 'react';

const About = () => {
  return (
    <section className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Jobindeed</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At Jobindeed, we are dedicated to revolutionizing the job application process. Our mission is to leverage the power of Artificial Intelligence to connect job seekers with their dream jobs seamlessly and efficiently.
            </p>
            <p className="text-lg mb-4">
              By automating job applications, we aim to save time and reduce the stress associated with job searching, allowing candidates to focus on what truly matters – preparing for their future roles.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://via.placeholder.com/400x300" alt="AI in Job Applications" className="rounded-lg shadow-lg"/>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img src="https://via.placeholder.com/400x300" alt="Job Application Automation" className="rounded-lg shadow-lg"/>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-lg mb-4">
              Our AI-powered platform automates the job application process by intelligently parsing job descriptions and matching them with candidates' profiles. The system then submits tailored applications on behalf of the candidates, maximizing their chances of success.
            </p>
            <p className="text-lg mb-4">
              We continuously update our algorithms to ensure that our recommendations remain relevant and impactful, providing candidates with the best possible opportunities.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Jobindeed?</h2>
          <p className="text-lg mb-4">
            With Jobindeed, job seekers can experience a streamlined and stress-free job search process. Our AI technology takes care of the tedious aspects of job applications, allowing candidates to focus on preparing for interviews and advancing their careers.
          </p>
          <p className="text-lg mb-4">
            Join us and experience the future of job applications today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

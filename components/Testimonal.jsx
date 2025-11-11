import React from 'react'
import Pretitle from './Pretitle'

const Testimonal = () => {
  const testimonials = [
    {
      name: 'John & Priya',
      video: 'https://www.youtube.com/embed/VIDEO_ID_1',
      text: "We are extremely happy with our new home! The entire process was smooth and professional.",
    },
    {
      name: 'Mr. Sharma',
      video: 'https://www.youtube.com/embed/VIDEO_ID_2',
      text: "The quality and service exceeded my expectations. Highly recommend this property group.",
    },
    {
      name: 'Anita & Raj',
      video: 'https://www.youtube.com/embed/VIDEO_ID_3',
      text: "From booking to handover, the team was supportive and transparent throughout.",
    },
    {
      name: 'Rahul',
      video: 'https://www.youtube.com/embed/VIDEO_ID_4',
      text: "Beautiful property with great amenities — worth every penny!",
    },
  ]

  return (
    <section className="pt-16 xl:pt-32 bg-gray-50">
      <div className="container mx-auto">
        {/* --- Top Content Section --- */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pretitle text="Testimonial" center/>
          <h2 className="h2 mb-6">Built on Trust, Proven by Results</h2>
          <p className="mb-8 text-gray-700">
            Our clients love us! But don't just take our word for it —
            hear what they have to say about working with us.
          </p>
        </div>

        {/* --- Video Row Section --- */}
        <div className="flex gap-6 overflow-x-auto justify-center pb-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-2xl shadow-md p-4 w-[320px] sm:w-[360px] hover:shadow-xl transition-shadow duration-300"
            >
              <iframe
                width="100%"
                height="200"
                src={item.video}
                title={`Customer Feedback ${index + 1}`}
                className="rounded-lg"
                allowFullScreen
              ></iframe>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
        {/* --- Optional image on the right (your original layout style) --- */}
        {/* <div className="flex flex-col xl:flex-row xl:justify-between items-center mt-20">
          <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
            <Image
              src="/hero.jpeg"
              fill
              className="object-cover rounded-2xl"
              quality={100}
              alt="Client testimonial"
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Testimonal

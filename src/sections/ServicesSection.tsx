export default function ServicesSection() {
  const services = [
    {
      title: 'Branding',
      description:
        'Our team will help you in building a good brand value, we do logo-designing, collateral design & provide various rebranding services',
    },
    {
      title: 'UI/UX Design',
      description:
        "We'll help you with wireframe & prototyping, responsive web design, user experience testing",
    },
    {
      title: 'Motion & Animation',
      description:
        'Get the latest & greatest motion animations, interaction animations',
    },
  ]

  return (
    <section>
      <div className='border-y-2 border-border  bg-bg py-20 font-base dark:border-darkBorder dark:bg-darkBg lg:py-[100px]'>
        <h2 className='mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl'>
          Our Services
        </h2>

        <div className='mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, i) => {
            return (
              <div
                className='flex flex-col gap-3 rounded-base border-2 border-border bg-white p-5 shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark'
                key={i}>
                <h4 className='text-xl font-heading'>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

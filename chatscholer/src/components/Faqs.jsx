import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How does ChatScholar work?',
      answer:
        'ChatScholars AI-powered chatbots use natural language processing (NLP) to understand student inquiries and provide personalized responses. Our chatbots are integrated with existing student support systems and can access student data to provide tailored recommendations.',
    },
    {
      question: 'What are ChatScholars core solutions?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'How much does ChatScholar cost?',
      answer:
        'ChatScholars pricing plans are flexible and affordable for schools of all sizes. We offer a variety of pricing options to fit your institutions budget and needs.',
    },
  ],
  [
    {
      question: 'How can I get started with ChatScholar?',
      answer:
        'Getting started with ChatScholar is easy. Simply contact our sales team for a free demo. We will work with you to understand your institutions needs and goals and develop a customized solution that meets your requirements.',
    },
    {
      question:
        'What kind of support does ChatScholar offer?',
      answer:
        'ChatScholar offers a comprehensive support package to ensure that you get the most out of your investment. Our team of experts is available to answer your questions and provide assistance with everything from setup to ongoing maintenance..',
    },
    {
      question:
        'What are the future plans for ChatScholar?        ',
      answer:
        'ChatScholar is committed to innovation and is constantly developing new features and solutions to help educational institutions transform the learning experience for all students. We are excited to continue to lead the way in AI-powered chatbots for education.',
    },
  ],
  [
    {
      question: ' Can ChatScholar be integrated with my existing systems?',
      answer:
        'Yes, ChatScholar can be integrated with your existing student support systems, learning management systems, and other campus software. This allows us to provide a seamless and consistent experience for students across all their interactions with your institution.',
    },
    {
      question: 'What is ChatScholars commitment to data privacy?',
      answer: 'ChatScholar is committed to protecting the privacy of your students data. We only collect and use student data that is necessary to provide our services. We also use industry-leading security measures to protect your data from unauthorized access.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

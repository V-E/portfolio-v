import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import content from "@/content/main"

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  MediumIcon,
  LinkedInIcon,
  MailIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {content.aboutMe.title}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              As a passionate Data Scientist, I specialize in turning complex data 
              into actionable insights, particularly in credit risk management. 
              With a strong background in statistical modeling and machine learning, 
              I develop predictive models, assess credit risk, and conduct backtesting 
              to enhance decision-making processes. My expertise spans data science, 
              visualization, and data engineering, allowing me to bridge the gap 
              between raw data and strategic business solutions.
            </p>
            <p>
              Driven by curiosity, I continuously explore the latest trends in data science
              and enjoy sharing my knowledge through various projects and articles. 
              I thrive on solving complex problems and strive to deliver innovative, 
              data-driven solutions tailored to real-world challenges.
            </p>
            <p>
              Beyond data, music plays a significant role in my life. 
              Whether at the piano or violin, I find creativity and balance through music, 
              blending analytical precision with artistic expression.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={content.socials.medium} icon={MediumIcon} className="mt-4">
              Follow on Medium
            </SocialLink>
            <SocialLink href={content.socials.github} icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href={content.socials.linkedIn} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={`mailto:${content.contact.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {content.contact.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

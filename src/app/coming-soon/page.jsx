import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import comingSoon from '@/images/logos/coming-soon.svg'
import Image from 'next/image'

export default function ComingSoon() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <div className="">
          <Image src={comingSoon} alt="" className={`h-32`} unoptimized />
        </div>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          There is nothing yet, but it will be available soon. Stay tuned!
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}

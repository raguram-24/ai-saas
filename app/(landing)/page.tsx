import React from 'react'
import { Button } from '@/components/ui/button'
import Link  from 'next/link'
const LandingPage= () => {
  return (
    <div>
        <div>
            <Link href="/sign-in">
                <Button>
                    Sign-in
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button>
                    Sign-Up
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default LandingPage
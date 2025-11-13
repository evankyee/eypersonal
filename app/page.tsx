import { siteConfig } from '@/config'
import ChemistryAscii from '@/components/ChemistryAscii'

export default function Home() {
  return (
    <>
      <ChemistryAscii />

      <p>
        I'm currently building something new - you can think of it as a space where ideas meet execution.
      </p>
      
      <p>
        I previously cofounded a startup, which I'm now involved with as a board member.
      </p>
      
      <p>
        In my spare time, I explore the web, read about language theory, and study technology more broadly - 
        history, market currents, and emerging research.
      </p>
      
      <p>
        I'm a self-taught engineer but I'm naturally a much stronger designer, so that's what I practice these days. 
        Either way, I'm happiest when I get to work with other builders to realize ambitious projects.
      </p>
      
      <p>
        Prior to all of this, I dropped out of a well-known university and spent time exploring different paths. 
        I was born and raised in one city, and have rotated between several others in my adult life.
      </p>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <p style={{ fontSize: '12px', textAlign: 'center' }}>
        <a href="/blog">writing</a> • <a href={siteConfig.social.github}>github</a> • <a href={siteConfig.social.linkedin}>linkedin</a> • <a href={`mailto:${siteConfig.author.email}`}>email</a>
      </p>
    </>
  )
}


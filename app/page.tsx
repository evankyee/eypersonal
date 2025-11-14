import { siteConfig } from '@/config'
import ChemistryAscii from '@/components/ChemistryAscii'

export default function Home() {
  return (
    <>
      <ChemistryAscii />

      <p>
        My name's Evan. This is my personal site, though I guess it's more demonstrative than personal.
      </p>
      
      
      <p>
        I spend a lot of my time thinking about how ML can unlock profound improvements in just one small (yet very important) thing.
      </p>
      
      <p>
       I've worked some cool jobs including quant trading, product, hardware systems, and software development. I graduated from Duke as a triple major in ECE, Math, and CS with a minor in Chemistry. I also finished premed coursework to keep my parents happy.
      </p>
      
      <p>
        I spent a year as a chef at a Michelin-starred restaurant. Naturally, I love cooking. I also enjoy skiing, lifting, reading about computer architecture, and the 49ers. 
      </p>

      <p>
       Most of all, I love collaborating and spending my time with amazing and transformative people. Feel free to reach out.
      </p>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <p style={{ fontSize: '12px', textAlign: 'center' }}>
        <a href="/blog">writing</a> • <a href={siteConfig.social.github}>github</a> • <a href={siteConfig.social.linkedin}>linkedin</a> • <a href={`mailto:${siteConfig.author.email}`}>email</a>
      </p>
    </>
  )
}


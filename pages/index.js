import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { SocialIcon } from 'react-social-icons';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';



import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Computer engineer passionate about everything called Coding</p>
      </section>
      <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-3">
      	<center><a href="images/Matteo_Curci_CV.pdf" target="_blank"><img src="images/cv_icon.png" width="25%" alt="Curriculum vitae"/></a></center>
	  </div>
	  </div>
	  <hr/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
			  <Link href={`/posts/${id}`}>
			    <a>{title}</a>
			  </Link>
			  <br />
			  <small className={utilStyles.lightText}>
			    <Date dateString={date} />
			  </small>
			</li>
          ))}
        </ul>
      </section><hr/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Last video</h2>
        <TwitchPlayer video="1207010795" width="500px" />
      </section><hr/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My course on Udemy</h2>
        Click <a href="https://www.udemy.com/course/introduzione-a-node-red-101" target="_blank">here</a>
        <a href="https://www.udemy.com/course/introduzione-a-node-red-101" target="_blank"><img src="images/node-red-course.png" />
        </a>
      </section><hr/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <center>
        <h2 className={utilStyles.headingLg}>Social</h2>
        <div class="row">
        <div class="col"><SocialIcon url="https://facebook.com/matteo.curci" /></div>
        <div class="col"><SocialIcon url="https://linkedin.com/in/matteo--curci/" /></div>
        <div class="col"><SocialIcon url="https://www.twitch.tv/accacoding" /></div>
        <div class="col"><SocialIcon url="https://github.com/accateo" /></div>
        <div class="col"><SocialIcon url="https://accateo.medium.com/"/></div>
        </div>
        </center>
        </section>
    </Layout>
  )
}
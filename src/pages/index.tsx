import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaCheck, FaHeart } from "react-icons/fa";

const Home: NextPage = () => {

  const philosophy = [
    {
      title: 'Simplicity',
      description: 'This stack consists of hand-selected tools that allow you to launch super light-weight websites. Without a steep learning curve. You will feel productive from the very beginning.'
    },
    {
      title: 'Latest tech',
      description: 'Staying up to date with the new technologies is important. There are amazing tools out there. The selected tools are battle-proven and provide huge value in many client projects.'
    },
    {
      title: 'Free',
      description: 'You don\'t need to spend money on a template or starterkit. The frameworks out there are all free for you to use. Make use of the experience of others.'
    }
  ]

  const features = [
    {
      title: 'Free Hosting',
      description: 'Get started with your website today! No monthly fee.'
    },
    {
      title: 'Latest tech',
      description: 'Hand picked selection of tools. Battle proven in dozens of client projects by our developers.'
    },
    {
      title: 'Analytics',
      description: 'Get useful insights out-of-the-box. Collect every piece of data from the beginning.'
    },
    {
      title: 'CMS',
      description: 'Start writing your blog right away. A blog overview and blog post page is already waiting for you!',
      badge: true
    },
    {
      title: 'Live Chat',
      description: 'Get in touch with your users right from the landing page.'
    },
    {
      title: 'Newsletter Signup',
      description: 'Collect email addresses and send them to a newsletter tool of your choice. This starter project contains a Mailchimp integration.'
    }
  ];

  const stack = [
    {title: 'NextJS', logo: '/nextjs.svg', description: 'The React Framework for the Web.', link: 'https://nextjs.org/'},
    {title: 'Tailwind', logo: '/tailwind.png', description: 'Rapidly build modern websites without ever leaving your HTML.', link: 'https://tailwindcss.com/'},
    {title: 'Vercel', logo: '/vercel.png', description: 'Develop. Preview. Ship.', link: 'https://vercel.com/'},
    {title: 'NextUI', logo: '/nextui.png', description: 'Make beautiful websites regardless of your design experience.', link: 'https://nextui.org/'},
    {title: 'Pirsch Analytics', logo: '/pirsch.svg', description: 'It\'s How Analytics Should Be.', link: 'https://pirsch.io/'},
    {title: 'Contentful', logo: '/contentful.png', description: 'The freedom to bring your best ideas to life.', link: 'https://www.contentful.com/'},
  ]

  const pricing = [
    { title: 'Free', price: '0', perks: ['First perk', 'Second perk', 'Third perk', 'Fourth perk'] },
    { title: 'Pro' , price: '19', perks: ['First perk', 'Second perk', 'Third perk', 'Fourth perk']},
    { title: 'Enterprise', price: '99', perks: ['First perk', 'Second perk', 'Third perk', 'Fourth perk'] },
    { title: 'Custom', price: null, perks: ['First perk', 'Second perk', 'Third perk', 'Fourth perk'] },
  ]

  return (
    <>
      <Head>
        <title>LastWebsite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={'flex flex-row gap-4 justify-end w-full p-4 bg-slate-100'}>
        {/*<Link href={'/blog'}>*/}
        {/*  Blog*/}
        {/*</Link>*/}
        <Link href={'https://github.com/matukosan/lastwebsite'} target={'__blank'}>
          <Image src={'/github.png'} width='20' height='20' alt='github-icon' />
        </Link>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-center text-slate-700">
        <div className="w-full flex flex-col text-center items-center justify-center gap-12 px-4 py-16 bg-slate-100">
          <div>
            <h2>The</h2>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#5314B3] to-[#d90d0d]">
              Last Website
            </h1>
            <h2>starter you need!</h2>
          </div>

          <div>
            <h2 className={'mb-0'}>
              Start building your product now!
            </h2>
          </div>

          <div className={'flex flex-col items-center gap-4'}>
            <div className={'text-lg text-center'}>Simply fork this repo on Github and deploy your website within minutes:</div>
            <Link href={'https://github.com/matukosan/lastwebsite'} target={'__blank'}>
              <Button size="lg" auto type={'submit'} css={{ backgroundColor: "#5314B3" }}>Get started</Button>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col text-center items-center justify-center gap-12 px-4 py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8 mt-6">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-100 p-4"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <div className="text-lg">{item.description}</div>
              </div>
            ))}
          </div>


          <h2 className={'mb-0 text-white text-transparent bg-clip-text bg-gradient-to-r from-[#5314B3] to-[#d90d0d] pr-1'}>Features</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {features.map((item) => (
              // <Badge disableOutline content="Coming soon" size="md" enableShadow>
                <div
                  key={item.title}
                  className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-100 p-4"
                >
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <div className="text-lg">{item.description}</div>
                </div>
              // </Badge>
            ))}
          </div>


          <h2 className={'text-white text-transparent bg-clip-text bg-gradient-to-r from-[#5314B3] to-[#d90d0d]'}>
            Stack
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {stack.map((item) => (
              <Link key={item.title} href={item.link} target={'__blank'}>
                <div
                  className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-100 p-4 text-slate-700 h-full hover:bg-gray-200 transition"
                >
                  <div className={'flex flex-row justify-between'}>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <Image alt={item.title} src={item.logo} width={'40'} height={'40'}/>
                  </div>
                  <div>{item.description}</div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h2 className={'text-white text-transparent bg-clip-text bg-gradient-to-r from-[#5314B3] to-[#d90d0d]'}>
              Pricing
            </h2>
            <div>This is what your pricing could look like:</div>
          </div>
          <div className={'grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2'}>
            {pricing.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-xl bg-gray-100 p-4 w-full"
              >
                <div className="font-bold">{item.title}</div>
                <div><span className={'text-3xl font-bold'}>€{item.price}</span>/mo.</div>
                <span className={'text-gray-500'}>billed monthly</span>
                {item.perks.map((perk) => (
                  <div key={perk} className={'text-left'}><FaCheck className={'text-purple-600 mr-2'}/>{perk}</div>
                ))}
                <Button css={{ backgroundColor: "#5314B3" }}>Get started</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className={'flex flex-row gap-4 justify-center w-full pb-2'}>
        made with <FaHeart size={20} className={'text-red-500'}/> by
        <Link href={'https://twitter.com/matukosan1'} target={'__blank'}>matukosan</Link>
      </footer>
    </>
  );
};

export default Home;

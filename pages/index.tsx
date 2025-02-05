import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Tweet } from "../components/Tweet"
import { Ranking } from "../components/Ranking"
import { rank } from "../lib/algorithm"

const Home = () => {
  const [ranking, setRanking] = useState<RankResponse>({
    score: 0,
    validations: [],
  })
  const [tweet, setTweet] = useState<string>("")
  useEffect(() => {
    const rankResponse = rank(tweet)
    setRanking(rankResponse)
  }, [tweet])
  const metaUrl = "https://twitter-algorithm.vercel.app"
  const metaImage = `http://twitter-algorithm.vercel.app/meta.jpg`
  const metaTitle = "Twitter Algorithm Rank Validator"
  const metaDescription =
    "See how your tweet performs against Twitter's Open Source algorithm."
  return (
    <>
      <Head>
        <title>Algorithm Rank Validator | Twitter Developers</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NotionHQ" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:url" content={metaUrl} />
        <meta name="twitter:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="main">
        <nav>
          <div className="contain">
            <div className="limit">
              <div className="nav-inner">
                <div className="wordmark">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <title>twitter</title>
                    <path
                      fill="currentColor"
                      d="M20 4.422c-0.734 0.328-1.527 0.547-2.355 0.645 0.848-0.508 1.496-1.313 1.805-2.27-0.793 0.469-1.672 0.812-2.605 0.996-0.75-0.797-1.816-1.293-2.996-1.293-2.266 0-4.102 1.836-4.102 4.102 0 0.32 0.035 0.633 0.105 0.934-3.41-0.172-6.434-1.805-8.457-4.289-0.352 0.605-0.555 1.313-0.555 2.062 0 1.422 0.723 2.68 1.824 3.414-0.672-0.020-1.305-0.207-1.859-0.512 0 0.016 0 0.035 0 0.051 0 1.988 1.414 3.648 3.293 4.023-0.344 0.094-0.707 0.145-1.082 0.145-0.266 0-0.52-0.027-0.773-0.074 0.523 1.629 2.039 2.816 3.832 2.852-1.406 1.102-3.172 1.758-5.098 1.758-0.332 0-0.656-0.020-0.98-0.059 1.82 1.168 3.977 1.844 6.293 1.844 7.547 0 11.676-6.254 11.676-11.676 0-0.18-0.004-0.355-0.012-0.531 0.801-0.574 1.496-1.297 2.047-2.121z"
                    ></path>
                  </svg>
                  Developer
                </div>
                <div>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/coryetzkorn/twitter-algorithm/blob/main/lib/algorithm.ts"
                        rel="noreferrer"
                      >
                        View Algorithm
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/coryetzkorn/twitter-algorithm"
                        rel="noreferrer"
                      >
                        Contribute
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="content">
          <div className="contain">
            <div className="limit">
              <h1>Algorithm Rank Validator</h1>
              <p className="description">
                See how your tweet performs against{" "}
                <a
                  target="_blank"
                  href="https://github.com/coryetzkorn/twitter-algorithm/blob/main/lib/algorithm.ts"
                  rel="noreferrer"
                >
                  Twitter's Open Source Algorithm
                </a>
                .
              </p>
              <div className="sides">
                <div className="side">
                  <h2>Your Tweet</h2>
                  <Tweet tweet={tweet} setTweet={setTweet} />
                  <div className="actions">
                    <Button
                      onClick={() =>
                        window.scrollTo(0, document.body.scrollHeight)
                      }
                    >
                      See Ranking
                    </Button>
                  </div>
                </div>
                <div className="side">
                  <h2>Your Ranking</h2>
                  <Ranking ranking={ranking} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="attribution">
          By{" "}
          <a
            target="_blank"
            href="https://twitter.com/coryetzkorn"
            rel="noreferrer"
          >
            @coryetzkorn
          </a>
        </div>
      </main>
      <style jsx>{`
        nav {
          background: var(--blue);
          color: var(--white);
          font-size: 14px;
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-inner ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }
        .nav-inner li {
          margin-left: 2em;
        }
        .nav-inner li a {
          color: var(--white);
          text-decoration: none;
        }
        .nav-inner {
          height: 60px;
        }
        .wordmark {
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .wordmark svg {
          display: block;
          margin-right: 10px;
        }
        .contain {
          padding: 0 20px;
        }
        .sides {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 60px;
        }
        .limit {
          max-width: 980px;
          margin: 0 auto;
        }
        .main {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        .content {
          padding: 40px 0 100px;
        }
        h1 {
          font-weight: 500;
          margin: 0;
          padding-bottom: 15px;
          border-bottom: 1px solid #dbdbdb;
          line-height: 1.2;
        }
        .description {
          margin: 1em 0 2em 0;
        }
        .description a {
          color: #000;
        }
        .description a:hover {
          color: var(--blue);
        }
        h2 {
          font-weight: 500;
          margin: 0 0 30px 0;
          padding-bottom: 10px;
          border-bottom: 1px solid #dbdbdb;
        }
        p {
          margin: 1em 0;
        }
        .tweet-wrap {
          max-width: 500px;
          margin: 30px 0;
        }
        .actions {
          margin-top: 20px;
        }
        .attribution a {
          color: var(--dark-blue);
          text-decoration: none;
        }
        .attribution a:hover {
          color: var(--darkest-blue);
          text-decoration: underline;
        }
        .attribution {
          font-weight: 500;
          text-transform: uppercase;
          font-size: 12px;
          margin: 20px;
        }
        @media screen and (min-width: 860px) {
          .attribution {
            position: absolute;
            right: 20px;
            bottom: 20px;
            margin: 0;
          }
          .description {
            margin: 1em 0 3em 0;
          }
          .content {
            padding: 60px 0;
          }
          .sides {
            grid-template-columns: 1fr 1fr;
            grid-gap: 60px;
          }
          .actions {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Home

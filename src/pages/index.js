import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
const features = [
  {
    title: <div style={{textAlign: 'center'}}>React</div>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    // description: (
    //   <>
    //     React基础
    //   </>
    // ),
  },
  {
    title: <div style={{textAlign: 'center'}}>Node</div>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    // description: (
    //   <>
    //     Node常用知识，
    //   </>
    // ),
  },
  {
    title: <div style={{textAlign: 'center'}}>算法和前端基础总结</div>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    // description: (
    //   <>
    //     记录LeetCode算法和前端基础知识
    //   </>
    // ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/React/redux_React-redux")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

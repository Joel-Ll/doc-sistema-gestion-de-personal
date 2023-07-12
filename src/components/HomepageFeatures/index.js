import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API de Control de Personal con Nest.js y Mongoose',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        API basada en Nest.js y Mongoose para una gestión eficiente del personal
      </>
    ),
  },
  {
    title: 'Gestión de Personal Simplificada con Nest.js y Mongoose',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        API sencilla y efectiva para gestionar el personal utilizando Nest.js y Mongoose
      </>
    ),
  },
  {
    title: 'API Restful de Control de Personal con Nest.js y Mongoose',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        API RESTful completa para controlar el personal, desarrollada con Nest.js y Mongoose
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

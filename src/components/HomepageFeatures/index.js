import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is YWAM Sendai?',
    address: '/docs/about/ywamsendai',
    description: (
      <>
        Everything you need to know about YWAM Sendai and YWAM international.
      </>
    ),
  },
  {
    title: 'Community',
    address: '/docs/community/communication',
    description: (
      <>
        All you need to know about being a part of the YWAM Sendai community - for both staff and students!
      </>
    ),
  },
  {
    title: 'Staff',
    address: '/docs/staff/join',
    description: (
      <>
        All you need to know about staffing at YWAM Sendai!
      </>
    ),
  },
  {
    title: 'Students',
    address: '/docs/students/apply',
    description: (
      <>
        All you need to know about being a student at YWAM UofN Sendai!
      </>
    ),
  },
];

function Feature({title, address, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <h3>
          <Link className={styles.formatLink} to={(address)}>
            {title}
          </Link>
        </h3>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

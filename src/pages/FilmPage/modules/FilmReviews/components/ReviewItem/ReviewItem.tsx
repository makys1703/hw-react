import { Paragraph } from '../../../../../../components/Paragraph';
import styles from './ReviewItem.module.css';


export function ReviewItem() {
  return (
    <div className={styles.review}>
      <div className={styles.reviewHeader}>
        <div className={styles.headerTitle}>
          Not as good as infinity war..
        </div>
        <div className={styles.headerDate}>
          2019-04-29
        </div>
      </div>
      <Paragraph>
      But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...
      </Paragraph>
    </div>
  );
}
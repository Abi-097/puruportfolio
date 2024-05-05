import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const PublicationData = [
  {
    id: 1,
    title: "Revisiting Class Imbalance: A Generalized Notion for Oversampling.",
    subTitle: "https://link.springer.com/chapter/10.1007/978-3-031-56700-1_38",
    result: "",
    des: "Purushoth Velayuthan, Navodika Karunasingha, Hasalanka Nagahawaththa, Buddhi G. Jayasekara, Asela Hevapathige Accepted at IACC 2023 13th International Advanced Computing Conference",
  },
  {
    id: 2,
    title:
      "Using Multispectral UAV Imagery for Marine Debris Detection in Sri Lanka.",
    subTitle: "https://ieeexplore.ieee.org/document/10382866",
    result: "",
    des: "Purushoth Velayuthan, Vinuri Piyathilake, Kavinda Athapaththu, Damitha Sandaruwan, Enosha Hettiarachchi, Asanka P. Sayakkara Accepted at ICITR 2023 8th International Conference on Information Technology Research",
  },
  {
    id: 3,
    title:
      "A Novel Angle Detector Based Real-Time Facial Emotion Recognition System.",
    subTitle: " ",
    result: "",
    des: "Purushoth Velayuthan, Savitha Devi, M.Sridevi, Manu Subramanian Under review at ISRO India",
  },
  {
    id: 4,
    title: "GADS: A Super Lightweight Model for Head Pose Estimation",
    subTitle: "",
    result: "",
    des: "Menan Velayuthan, Asiri Gawesha, Purushoth Velayuthan, Pradeepa Samarasinghe, Dharshana Kasthurirathna Journal of Visual Communication and Image Representation (2023) (Under Review)",
  },
];
const AcheivementData = [
  {
    id: 1,
    title: "Awarded for Rajiv Gandhi Scholarship for academic session",
    subTitle: "For the best mathematical results in G.C.E Advanced Level",
    result: "2018 / 2019",
    des: " ",
  },
  {
    id: 2,
    title: "Distinction in Australian National Chemistry Quiz Competition",
    subTitle: "Awarded for the students who excelled at the quiz competition",
    result: "2013",
    des: " ",
  },
  {
    id: 3,
    title: "Sri Lankan Mathematics Olympiad",
    subTitle: "Selected for the district level competition",
    result: "2012",
    des: " ",
  },
  {
    id: 4,
    title: "Participated IMU science Challenge",
    subTitle:
      "Represented our school for International Medical University Malaysia Science quiz competition",
    result: "2015",
    des: " ",
  },
];
const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <div className="font-titleFont flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Publications</h2>
          </div>

          {PublicationData.map((publication) => (
            <div key={publication.id}>
              <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                  title={publication.title}
                  subTitle={publication.subTitle}
                  result={publication.result}
                  des={publication.des}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="py-12 font-titleFont flex flex-col gap-4">
          <div className="font-titleFont flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Awards and Achievements</h2>
          </div>
          {AcheivementData.map((achievement) => (
            <div key={achievement.id}>
              <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                  title={achievement.title}
                  subTitle={achievement.subTitle}
                  result={achievement.result}
                  des={achievement.des}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

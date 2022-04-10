import React from "react";
import "./About.scss";

interface InfoItemProps {
  imageClass: string;
  image: string;
  paragraph: string;
  subtitle: string;
  title: string;
}

const InfoItem: React.FC<InfoItemProps> = (props) => {
  const { imageClass, image, paragraph, subtitle, title } = props;

  return (
    <section className="info-item">
      <div className="flex">
        <div>
          <img
            className={imageClass}
            src={require(`../../images/${image}`)}
            alt="Grumpy Cat"
          />
        </div>

        <h2 className="title fw-bold ms-3">{title}</h2>
      </div>
      <p className="fw-bold mt-2">{subtitle}</p>
      <p className="fw-bold mt-2">{paragraph}</p>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <div className="about container px-4 px-lg-5">
      <h1 className="text-center pt-3">About</h1>
      <div className="info-grid">
        <InfoItem
          image="grumpy-not-found.jpeg"
          imageClass="border-neutral"
          title="Speed"
          subtitle="A house cat can reach speeds of up to 30mph"
          paragraph="If you’ve watched your little kitty charging around the living room when they’re feeling lively you know that cats are pretty quick, but you won’t believe this cat fact. They can hit speeds of around 30mph which is so fast that they could beat Usain Bolt in a 200-metre dash!"
        />
        <InfoItem
          image="tiger-cat.jpeg"
          imageClass="border-primary"
          title="Genetics"
          subtitle="House cats share 95.6% of their genetic makeup with tigers"
          paragraph="This cat fact will really blow your mind. A study discovered that our little house cats share 95.6% of their genetic makeup with tigers!

          They also share a lot of the same behaviours such as scent and urine marking, prey stalking and pouncing."
        />
        <InfoItem
          image="siamese-cat.jpeg"
          imageClass="border-secondary"
          title="Volume"
          subtitle="The record for the loudest purr is 67.8db(A)"
          paragraph="The record for the loudest purr by a domestic cat is currently held by Merlin, a black and white cat from Torquay, UK. His purr is 67.8db(A) and for context, this is nearly the same volume as a shower! Most cats purr at around 25db."
        />
        <InfoItem
          image="orange-cat.jpeg"
          imageClass="border-primary"
          title="Money"
          subtitle="The richest cat in the world had 7 million"
          paragraph="The richest cat in the world according to Guinness World Records is Blackie. When his millionaire owner passed away he refused to recognise his family in his will and instead gave his 7-million-pound fortune to Blackie! We can’t believe that interesting cat fact!"
        />
        <InfoItem
          image="sleepy-cat.jpeg"
          imageClass="border-secondary"
          title="Sleep"
          subtitle="Cats spend 70% of their lives sleeping"
          paragraph="If you thought cats spent a lot of their lives sleeping, you’d be right. According to Veterinary Hub, Cats actually spend 70% of their lives sleeping, which works out to around 13-16 hours a day. It’s a cat’s life!"
        />
      </div>
    </div>
  );
};

export default About;

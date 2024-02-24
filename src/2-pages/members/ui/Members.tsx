import { head, members, membersHeadings } from '~/shared/api/mock';
import { Article } from '~/shared/ui/Article';
import { Section } from '~/shared/ui/Section';

export function Members() {
  return (
    <div>
      <Section headings={membersHeadings} type="main">
        <Article>
          <p>
            Наша організація може надавати: першу психологічну допомогу;
            консультативну допомогу; психотерапевтичну допомогу.
          </p>
          <p>
            Робота може відбуватися як в індивідуальній, так і в груповій формі.
          </p>
          <p>
            Групи, з якими працює наша організація: діти, підлітки, люди, які
            пережили втрати, військовослужбовці та члени їх сімей, внутрішньо
            переміщені особи, люди, що постраждали від воєнних дій, жертви
            сексуального насильства, люди з залежностями (алкоголізм, наркоманія
            і т.п.).
          </p>

          <h2>Голова</h2>
          <div>
            <h3>{head.name}</h3>
            <p>{head.specialties}</p>
            <p>Стаж: {head.years}</p>
            <p>{head.description}</p>
          </div>

          <h2>Члени громадської організації</h2>
          {members.map((member) => (
            <div key={member.name}>
              <h3>{member.name}</h3>
              <p>{member.specialties}</p>
              <p>Стаж: {member.years}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </Article>
      </Section>
    </div>
  );
}

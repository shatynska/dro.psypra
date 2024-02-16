import { programsHeadings } from '~/shared/api/mock';
import { Article } from '~/shared/ui/Article';
import { Section } from '~/shared/ui/Section';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/shared/ui/Table';

export function Programs() {
  return (
    <div>
      <Section variant={'light'} headings={programsHeadings}>
        <Article>
          <h2>Програма роботи з родинами які втратили рідних на війні</h2>

          <Table className="mt-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Тема</TableHead>
                <TableHead>Мета</TableHead>
                <TableHead>Зміст</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Скорбота. Початок занять.</TableCell>
                <TableCell>Створення атмосфери безпеки та довіри.</TableCell>
                <TableCell>
                  Знайомство, інформування. Стилі подолання.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Туга та спогади.</TableCell>
                <TableCell>
                  Опис померлого, розуміння наслідків, майбутні стосунки.
                </TableCell>
                <TableCell>
                  Дивимося фотографії. Що б ви хотіли пам&apos;ятати завжди?
                  Опишіть зміни у житті.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Зіткнення зі смертю та прощання.</TableCell>
                <TableCell>
                  Переживання та враження, пов&apos;язані зі смертю. Хвороба.
                  Прощання.
                </TableCell>
                <TableCell>
                  Прощання з тілом, похорони, ритуали, символічні дії. Духовні
                  питання життя та смерті.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>
                  Як скорбота впливає на почуття, думки та поведінку.{' '}
                </TableCell>
                <TableCell>Увага до власних реакцій, їх прийняття.</TableCell>
                <TableCell>
                  Розібратися у думках, почуттях, поведінці. Стратегії
                  подолання. Методи самодопомоги.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Вплив скорботи на здоров&apos;я.</TableCell>
                <TableCell>
                  Увага до власного організму. Фізичне сприйняття скорботи.
                </TableCell>
                <TableCell>
                  Навчитися приймати сигнали тіла. Що мені потрібно, що важливо
                  для мене? Навчання вправам на релаксацію.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>
                  Як скорбота впливає на сім&apos;ю та друзів.
                </TableCell>
                <TableCell>
                  Усвідомлення позитивної та негативної суспільної допомоги.
                </TableCell>
                <TableCell>
                  Обговорити зраду, розчарування, світлі моменти, підтримку,
                  близькість і дистанцію у відносинах з оточенням. Як до цього
                  ставитися?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>Зміни ідентичності після втрати.</TableCell>
                <TableCell>
                  Усвідомлення індивідуальних та соціальних змін. Хто я і яка
                  моя роль?
                </TableCell>
                <TableCell>
                  Що змінилося: цінності, бажання, поведінка, самопочуття?
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>Скорбота як життєвий досвід.</TableCell>
                <TableCell>
                  Опрацювання скорботи як важливого життєвого досвіду.
                </TableCell>
                <TableCell>
                  Намагайтеся описати отримання нового життєвого досвіду як
                  позитивне життєве зростання і побачити, що залишається
                  складними.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Article>
      </Section>
    </div>
  );
}

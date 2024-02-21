import { dimensionsLinks, goLinks, specialistsLinks } from '~/shared/api/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionListItem,
  AccordionTopListItem,
  AccordionTrigger,
} from '~/shared/ui/Accordion';
import { Logomark } from '~/shared/ui/Logomark';

export function SidebarNavigation() {
  return (
    <Accordion type="single" collapsible className="relative top-12">
      <AccordionItem value="item-1">
        <AccordionTopListItem
          key="{specialist.name}"
          title="головна"
          href="/"
        />
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>фахівці</AccordionTrigger>
        <AccordionContent>
          <ul>
            {specialistsLinks.map((link) => (
              <AccordionListItem
                key={link.title}
                title={link.title}
                href={link.href}
              >
                {link.description}
              </AccordionListItem>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>про нас</AccordionTrigger>
        <AccordionContent>
          <ul>
            <AccordionListItem href="/go">
              <div className="flex flex-col content-center items-center justify-end rounded-md bg-gradient-to-b from-muted/20 to-muted p-6 text-foreground no-underline focus:bg-muted focus:text-accent-foreground focus:outline-none">
                <Logomark />
                <div className="mb-2 mt-4 text-center text-lg font-medium">
                  Психотерапевти Дрогобиччини
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  громадська організація
                </p>
              </div>
            </AccordionListItem>
            {goLinks.map((link) => (
              <AccordionListItem
                key={link.title}
                title={link.title}
                href={link.href}
              >
                {link.description}
              </AccordionListItem>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>інформація</AccordionTrigger>
        <AccordionContent>
          <ul>
            {dimensionsLinks.map((link) => (
              <AccordionListItem
                key={link.title}
                title={link.title}
                href={link.href}
              >
                {link.description}
              </AccordionListItem>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

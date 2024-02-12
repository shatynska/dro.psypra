'use client';

import { documents, sections, specialists } from '~/shared/api/mock';
import { Logomark } from '~/shared/ui/Logomark';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuNestedList,
  NavigationMenuNestedListItem,
  NavigationMenuTrigger,
} from '~/shared/ui/NavigationMenu';

export function HeaderNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>фахівці</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuNestedList>
              {specialists.map((specialist) => (
                <NavigationMenuNestedListItem
                  key={specialist.name}
                  title={specialist.name}
                  href={specialist.href}
                >
                  {specialist.description}
                </NavigationMenuNestedListItem>
              ))}
            </NavigationMenuNestedList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>про нас</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuNestedList className="md:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col content-center items-center justify-end rounded-md bg-gradient-to-b from-muted/20 to-muted p-6 no-underline focus:bg-muted focus:text-accent-foreground focus:outline-none"
                    href="/go"
                  >
                    <Logomark />
                    <div className="mb-2 mt-4 text-center text-lg font-medium">
                      Психотерапевти Дрогобиччини
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      громадська організація
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {documents.map((document) => (
                <NavigationMenuNestedListItem
                  key={document.title}
                  title={document.title}
                  href={document.href}
                >
                  {document.description}
                </NavigationMenuNestedListItem>
              ))}
            </NavigationMenuNestedList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>інформація</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuNestedList>
              {sections.map((section) => (
                <NavigationMenuNestedListItem
                  key={section.title}
                  title={section.title}
                  href={section.href}
                >
                  {section.description}
                </NavigationMenuNestedListItem>
              ))}
            </NavigationMenuNestedList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

'use client';

import { documents, sections, specialists } from '~/shared/api/mock';
import {
  Logomark,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from '~/shared/ui';

export function HeaderNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>фахівці</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {specialists.map((specialist) => (
                <NavigationMenuListItem
                  key={specialist.name}
                  title={specialist.name}
                  href={specialist.href}
                >
                  {specialist.description}
                </NavigationMenuListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>про нас</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col content-center items-center justify-end  rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/go"
                  >
                    <Logomark size="sm" />
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
                <NavigationMenuListItem
                  key={document.title}
                  title={document.title}
                  href={document.href}
                >
                  {document.description}
                </NavigationMenuListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>інформація</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {sections.map((section) => (
                <NavigationMenuListItem
                  key={section.title}
                  title={section.title}
                  href={section.href}
                >
                  {section.description}
                </NavigationMenuListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

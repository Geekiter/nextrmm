"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "~/components/ui/separator";
import { dashboardMenuConfig } from "~/config/dashboard-menu";
import { cn } from "~/lib/utils";
import { DashboardMenuConfig, DashboardMenuItem } from "~/types";

export function DashboardMenu() {
  const Items: DashboardMenuItem[] = dashboardMenuConfig.dashboardMenu;
  const parts = usePathname().split("/");
  const path = `/${parts[2]}${parts[3] ? "/" + parts[3] : ""}`;
  return (
    <div className="pt-1">
      <ul className="flex space-x-4">
        {Items.map((item, index) => {
          return (
            <li
              key={item.href}
              className={cn(
                "font-semibold",
                path === item.href
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-600 hover:text-primary",
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Separator />
    </div>
  );
}

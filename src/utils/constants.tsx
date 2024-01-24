import theme from "@/styles/theme";

interface navbarItemsProps {
  color: string;
  size: string;
}

interface MenuItem {
  title: string;
  link: string;
  links?: MenuItem[];
}

export const departmentColors = {
  academic: theme.palette.blue.dark,
  engage: theme.palette.orange.main,
  about: theme.palette.basic.main,
  community: theme.palette.basic.light,
};

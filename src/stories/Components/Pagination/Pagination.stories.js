import Pagination from "./Pagination";
import { PaginationItem } from "./PaginationItem";
import { PaginationArrow } from "./PaginationArrow";
import PaginationItemEllipsis from "./PaginationItemEllipsis";
import * as myThemes from "../../../tokens";
import { ThemeProvider } from "styled-components";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

export const Basic = {
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "default"],
    },
  },
  args: {
    size: "default",
    pages: [1, 2, 3, 4, 5],
  },
};

export const Truncation = {
  argTypes: Basic.argTypes,
  args: {
    size: "default",
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
};

export const Current = {
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "default"],
    },
  },
  args: {
    size: "default",
    $current: 3,
    pages: [1, 2, 3, 4, 5],
  },
};

export const Item = {
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "default"],
    },
    $active: {
      control: "boolean",
    },
  },
  args: {
    item: 1,
    disabled: false,
    size: "default",
    $active: false,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <PaginationItem {...props} />
    </ThemeProvider>
  ),
};

export const Prev = {
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "default"],
    },
    disabled: {
      type: "boolean",
    },
    arrow: {
      control: "radio",
      options: ["left", "right"],
    },
  },
  args: {
    size: "default",
    disabled: false,
    arrow: "left",
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <PaginationArrow {...props} />
    </ThemeProvider>
  ),
};

export const Next = {
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "default"],
    },
    disabled: {
      type: "boolean",
    },
    arrow: {
      control: "radio",
      options: ["left", "right"],
    },
  },
  args: {
    size: "default",
    disabled: false,
    arrow: "right",
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <PaginationArrow {...props} />
    </ThemeProvider>
  ),
};

export const Ellipsis = {
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <PaginationItemEllipsis />
    </ThemeProvider>
  ),
};

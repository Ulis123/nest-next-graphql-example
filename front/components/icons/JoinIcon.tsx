import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const JoinIcon: React.FC<SvgIconProps> = ({ color = "inherit", ...props }) => {
  return (
    <SvgIcon viewBox="0 0 18 16" color={color} {...props}>
      <path d="M9 9.61914H3.74414C3.22852 9.61914 2.74219 9.71875 2.28516 9.91797C1.82812 10.1055 1.42969 10.3691 1.08984 10.709C0.75 11.0488 0.486328 11.4473 0.298828 11.9043C0.0996094 12.3613 0 12.8535 0 13.3809V14.875C0 15.0977 0.0644531 15.2793 0.193359 15.4199C0.333984 15.5605 0.521484 15.6309 0.755859 15.6309C0.978516 15.6309 1.1543 15.5605 1.2832 15.4199C1.42383 15.2793 1.49414 15.0977 1.49414 14.875V13.3809C1.49414 12.7363 1.71094 12.2031 2.14453 11.7812C2.57812 11.3477 3.11133 11.1309 3.74414 11.1309H9C9.63281 11.1309 10.166 11.3477 10.5996 11.7812C11.0332 12.2031 11.25 12.7363 11.25 13.3809V14.875C11.25 15.0977 11.3145 15.2793 11.4434 15.4199C11.584 15.5605 11.7715 15.6309 12.0059 15.6309C12.2285 15.6309 12.4043 15.5605 12.5332 15.4199C12.6738 15.2793 12.7441 15.0977 12.7441 14.875V13.3809C12.7441 12.8535 12.6504 12.3613 12.4629 11.9043C12.2637 11.4473 11.9941 11.0488 11.6543 10.709C11.3262 10.3691 10.9336 10.1055 10.4766 9.91797C10.0195 9.71875 9.52734 9.61914 9 9.61914ZM6.38086 8.125C6.89648 8.125 7.38281 8.02539 7.83984 7.82617C8.29688 7.63867 8.69531 7.375 9.03516 7.03516C9.375 6.69531 9.63867 6.29688 9.82617 5.83984C10.0254 5.38281 10.125 4.89648 10.125 4.38086C10.125 3.85352 10.0254 3.36133 9.82617 2.9043C9.63867 2.44727 9.375 2.04883 9.03516 1.70898C8.69531 1.36914 8.29688 1.10547 7.83984 0.917969C7.38281 0.71875 6.89648 0.619141 6.38086 0.619141C5.85352 0.619141 5.36133 0.71875 4.9043 0.917969C4.44727 1.10547 4.04883 1.36914 3.70898 1.70898C3.36914 2.04883 3.10547 2.44727 2.91797 2.9043C2.71875 3.36133 2.61914 3.85352 2.61914 4.38086C2.61914 4.89648 2.71875 5.38281 2.91797 5.83984C3.10547 6.29688 3.36914 6.69531 3.70898 7.03516C4.04883 7.375 4.44727 7.63867 4.9043 7.82617C5.36133 8.02539 5.85352 8.125 6.38086 8.125ZM6.38086 2.13086C7.01367 2.13086 7.54688 2.34766 7.98047 2.78125C8.41406 3.20312 8.63086 3.73633 8.63086 4.38086C8.63086 5.01367 8.41406 5.54688 7.98047 5.98047C7.54688 6.41406 7.01367 6.63086 6.38086 6.63086C5.73633 6.63086 5.19727 6.41406 4.76367 5.98047C4.3418 5.54688 4.13086 5.01367 4.13086 4.38086C4.13086 3.73633 4.3418 3.20312 4.76367 2.78125C5.19727 2.34766 5.73633 2.13086 6.38086 2.13086ZM17.7715 5.34766C17.6191 5.19531 17.4434 5.11914 17.2441 5.11914C17.0449 5.11914 16.8691 5.19531 16.7168 5.34766L14.2559 7.82617L13.2715 6.8418C13.1191 6.70117 12.9434 6.63086 12.7441 6.63086C12.5449 6.63086 12.3691 6.70117 12.2168 6.8418C12.0762 6.99414 12.0059 7.16992 12.0059 7.36914C12.0059 7.56836 12.0762 7.74414 12.2168 7.89648L13.7285 9.4082C13.7988 9.47852 13.8809 9.53125 13.9746 9.56641C14.0801 9.60156 14.1738 9.61914 14.2559 9.61914C14.3262 9.61914 14.4082 9.60156 14.502 9.56641C14.6074 9.53125 14.7012 9.47852 14.7832 9.4082L17.7715 6.40234C17.9238 6.25 18 6.07422 18 5.875C18 5.67578 17.9238 5.5 17.7715 5.34766Z" />
    </SvgIcon>
  );
};

export default JoinIcon;

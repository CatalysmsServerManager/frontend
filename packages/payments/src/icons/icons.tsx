import { FC, forwardRef } from 'react';
import { Icon, IIconProps, defaultProps, IconContainer } from './baseIcon';

export const AlertTriangle: FC<IIconProps> = (props) => (
  <IconContainer
    highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z" /><circle cx="12" cy="16" r="1" /><path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
    </Icon>
  </IconContainer>
); AlertTriangle.defaultProps = defaultProps;

export const Archive: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick}>
    <Icon {...props}>
      <path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z" />
      <rect height="2" rx=".87" ry=".87" width="6" x="9" y="12" />
    </Icon>
  </IconContainer>
); Archive.defaultProps = defaultProps;

export const ArrowBack: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" />
    </Icon>
  </IconContainer>
); ArrowBack.defaultProps = defaultProps;

export const CheckMark: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="m9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
    </Icon>
  </IconContainer>
); CheckMark.defaultProps = defaultProps;

export const Close: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z" /><circle cx="7.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" />
    </Icon>
  </IconContainer>
); Close.defaultProps = defaultProps;

export const Connect: FC<IIconProps> = (props) => (
  <IconContainer highlihgt={props.highlight} onClick={props.onClick}>
    <Icon {...props}>
      <path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z" />
    </Icon>
  </IconContainer>
); Connect.defaultProps = defaultProps;

export const CreditCard: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z" /><path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z" /><path d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
    </Icon>
  </IconContainer>
); CreditCard.defaultProps = defaultProps;

export const Dashboard: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z" />
    </Icon>
  </IconContainer>
); Dashboard.defaultProps = defaultProps;

export const Discord: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      {
        props.outline ?
          <path d="M10.149,5.031,9.466,5.1A11.5,11.5,0,0,0,4.277,7.148H4.243l-.034.034A4.55,4.55,0,0,0,3.185,8.957,25.8,25.8,0,0,0,2.16,11.894,28.415,28.415,0,0,0,1,19.335v.239l.1.2a7.59,7.59,0,0,0,3.515,2.834,9.075,9.075,0,0,0,3.21.922l.512.034,1.194-2.561a16.241,16.241,0,0,0,3.483.376,15.969,15.969,0,0,0,3.448-.376l1.2,2.561.512-.034a9.065,9.065,0,0,0,3.208-.922A7.592,7.592,0,0,0,24.9,19.779l.1-.2v-.239a28.343,28.343,0,0,0-1.127-7.443,25.8,25.8,0,0,0-1.024-2.934A4.608,4.608,0,0,0,21.79,7.183l-.034-.035A11.579,11.579,0,0,0,16.533,5.1l-.649-.069s-.495,1.656-.649,2.356a19.107,19.107,0,0,0-2.219-.173,18.269,18.269,0,0,0-2.219.172c-.153-.7-.649-2.356-.649-2.356ZM8.784,7.387c.038.11.107.251.137.341a11.3,11.3,0,0,0-3.243,1.2L6.6,10.8a14.661,14.661,0,0,1,6.418-1.434A14.661,14.661,0,0,1,19.435,10.8l.888-1.879a10.762,10.762,0,0,0-3.141-1.194c.029-.09.131-.229.17-.342a8,8,0,0,1,3.277,1.4,6.5,6.5,0,0,1,.648,1.092A21.326,21.326,0,0,1,22.2,12.44a26.174,26.174,0,0,1,1.059,6.52,6.3,6.3,0,0,1-2.595,1.912,7.906,7.906,0,0,1-1.844.615l-.444-.956c.251-.085.295-.081.512-.172A7.942,7.942,0,0,0,20.9,19.234l-.888-1.707a6.53,6.53,0,0,1-1.6.853,15.148,15.148,0,0,1-5.394.922,12.7,12.7,0,0,1-4.985-.922,6.443,6.443,0,0,1-1.6-.853L5.1,19.232a8.677,8.677,0,0,0,2.048,1.127c.218.09.291.085.546.17l-.478.956a8.072,8.072,0,0,1-1.877-.615,6.31,6.31,0,0,1-2.595-1.912A26.174,26.174,0,0,1,3.8,12.439a20.973,20.973,0,0,1,.955-2.561A8.19,8.19,0,0,1,5.37,8.786a8.4,8.4,0,0,1,3.414-1.4Zm1.5,5.257c-.9,0-1.639.978-1.639,2.185s.734,2.185,1.639,2.185,1.639-.978,1.639-2.185S11.19,12.644,10.286,12.644Zm5.462,0c-.9,0-1.639.978-1.639,2.185s.734,2.185,1.639,2.185,1.639-.978,1.639-2.185S16.652,12.644,15.748,12.644Z" /> : <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
      }
    </Icon>
  </IconContainer>
); Discord.defaultProps = defaultProps;

export const Book: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      {
        <path d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z" />
      }
    </Icon>
  </IconContainer>
); Book.defaultProps = defaultProps;

export const Github: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github" />
    </Icon>
  </IconContainer>
); Github.defaultProps = defaultProps;

export const Home: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
    </Icon>
  </IconContainer>
); Home.defaultProps = defaultProps;

export const Link: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" /><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />   </Icon>
  </IconContainer>
); Link.defaultProps = defaultProps;

export const Mail: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z" />
    </Icon>
  </IconContainer>
); Mail.defaultProps = defaultProps;

export const Menu = forwardRef<HTMLDivElement, IIconProps>((props, ref) => {
  return (
    <IconContainer highlight={props.highlight} onClick={props.onClick} ref={ref} >
      <Icon {...props}>
        <rect
          height="2"
          rx=".95"
          ry=".95"
          width="18"
          x="3"
          y="11"
        />
        <rect
          height="2"
          rx=".95" ry=".95"
          width="18"
          x="3" y="16"
        />
        <rect
          height="2"
          rx=".95"
          ry=".95"
          width="18"
          x="3" y="6"
        />
      </Icon>
    </IconContainer>
  );
}); Menu.defaultProps = defaultProps;

export const Person: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
    </Icon>
  </IconContainer>
); Person.defaultProps = defaultProps;

export const Plus: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
    </Icon>
  </IconContainer>
); Plus.defaultProps = defaultProps;

export const Steam: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props} >
      <path
        clipRule="evenodd"
        d="M22 8.165a5.48 5.48 0 01-5.59 5.478l-5.335 3.956a4.027 4.027 0 11-3.55-4.452l3.516-4.977v-.005a5.48 5.48 0 0110.959 0zm-11.99 8.95a2.902 2.902 0 11-5.803 0 2.902 2.902 0 015.803 0zm6.576-5.185a3.77 3.77 0 100-7.54 3.77 3.77 0 000 7.54z"
        fillRule="evenodd"
      >
      </path>
      < circle cx="16.609" cy="8.077" r="3.06" />
      <rect
        height="4.84"
        rx="2.42"
        transform="rotate(21.78 -15.7 5.378)"
        width="27.596"
        x="-15.7"
        y="5.378"
      />
    </Icon>
  </IconContainer>
); Steam.defaultProps = defaultProps;

export const Server: FC<IIconProps> = (props) => (
  <IconContainer highlihgt={props.highlight} onClick={props.onClick}>
    <Icon {...props}>
      <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H5.62zM18 19H6a1 1 0 0 1-1-1v-5h14v5a1 1 0 0 1-1 1z" /><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" /><circle cx="8" cy="16" r="1" />
    </Icon>
  </IconContainer>
); Server.defaultProps = defaultProps;

export const Settings: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" />
      <path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z" />
    </Icon>
  </IconContainer>
); Settings.defaultProps = defaultProps;

export const ShoppingCart: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z" /><circle cx="7.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" />
    </Icon>
  </IconContainer>
); ShoppingCart.defaultProps = defaultProps;

export const SignOut: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" /><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
    </Icon>
  </IconContainer>
); SignOut.defaultProps = defaultProps;

export const Tracker: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z" />
    </Icon>
  </IconContainer>
); Tracker.defaultProps = defaultProps;

export const Undo: FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76zm-9.77-9.5a11.07 11.07 0 0 1 8.81 4.26A9 9 0 0 0 10.45 9a1 1 0 0 1-1-1V6.08l-4.82 4.17 4.82 4.21v-2a1 1 0 0 1 1-.96z" />
    </Icon>
  </IconContainer>
); Undo.defaultProps = defaultProps;

import { ColorRing } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import color from '../../fonts-colors/colors';
export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ColorRing
        //   visible={true}
        height="120"
        width="120"
        //   radius="11"
        //   colors={[
        //     `${color.accentColor}`,
        //     `${color.semiLightColor}`,
        //     `${color.darkColor}`,
        //   ]}
        //   ariaLabel="three-dots-loading"
        //   wrapperStyle={{}}
        //   wrapperClassName=""
        visible={true}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          `${color.accentColor}`,
          `${color.semiLightColor}`,
          `${color.darkColor}`,
          `${color.lightColor}`,
          `${color.lightDarkColor}`,
        ]}
      />
    </div>
  );
}

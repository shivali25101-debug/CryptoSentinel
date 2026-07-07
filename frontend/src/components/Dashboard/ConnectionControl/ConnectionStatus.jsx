import useCyberData from "../../../hooks/useCyberData";

function ConnectionStatus() {

  const { vpnStatus, scenario } = useCyberData();

  let text = "";

  switch (vpnStatus) {
    case "Disconnected":
      text = "Connection is not established";
      break;

    case "Connecting":
      text = "Establishing secure VPN tunnel...";
      break;

    case "Connected":
      text = "Secure tunnel established";
      break;

    default:
      text = "Connection status unknown";
  }

  return (
    <div className="pb-6 text-center">

      <h2 className="text-[24px] text-white">
        {text}
      </h2>

      
    </div>
  );
}

export default ConnectionStatus;
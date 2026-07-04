function ConnectionStatus({ scenario }) {

  const text =
    scenario === "normal"
      ? "Connection is not established"
      : scenario === "secure"
      ? "Secure tunnel established"
      : "⚠ Attack detected in network";

  return (
    <div className="pb-6 text-center">

      <h2 className="text-[24px] text-white">
        {text}
      </h2>

      <p className="text-gray-400 text-[13px] mt-2">
        Click a mode below to simulate network behavior
      </p>

    </div>
  );
}

export default ConnectionStatus;
import ProcessingSVG from "../icons/busy-icon";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <ProcessingSVG />
    </div>
  );
}

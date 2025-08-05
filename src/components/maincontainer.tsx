type ContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: ContainerProps) {
  return (
    <div className="flex flex-col max-w-5xl min-h-screen mx-auto bg-white/[2%]">
      {children}
    </div>
  );
}

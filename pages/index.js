import NavBar from "../components/NavBar";
// 우리에게 NextJS application의 client-side navigation을 제공해줌

export default function Home() {
  return (
    <div>
      <p>Hello</p>
      <style jsx global>
        {`
        a {
          color : white;
        }`}
      </style>
    </div>
  );
}
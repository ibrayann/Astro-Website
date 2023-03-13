import React, {useState} from 'react'

const Tabs = ({ heading}) => {
  const [headings, setHeadings] = useState("Npm")

  const contents =  (heading) => {
    if (heading == "Npm") {
     return " $ npm create astro@latest "
    } else if (heading == "Yarn") {
      return " $ yarn create astro"
    }
    return " $ pnpm create astro@latest "
      
    
  };
  return (
    <div className="mt-7">
      <ul className=" flex justify-start gap-4 bg-[#333] text-white py-2 px-5">
        {heading.map((header) => (
          <li
            className={`${header == headings && "text-[#A741FF] font-bold"} cursor-pointer`}
            key={header}
            onClick={() => setHeadings(header)}
          >
            {header}
          </li>
        ))}
      </ul>
      <ul className=" text-lg p-5 border font-bold bg-[#f4f4f4]">
        {<li>{contents(headings)}</li>}
      </ul>
    </div>
  );
}

export default Tabs
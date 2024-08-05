export default function TimeLine({ data }) {
  return (
    <div>
      {data.map((item, key) => (
        <div key={key}>
          {/* Heading */}
          <div class="ps-2 my-2 first:mt-0">
            <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
              {item.date}
            </h3>
          </div>
          {item.data.map((i, k) => (
            <>
              {/* line */}
              <div class="flex gap-x-3">
                <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div class="relative z-10 size-7 flex justify-center items-center">
                    <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                  </div>
                </div>
                {/* content */}
                <div class="grow pt-0.5 pb-8">
                  <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    {i.title}
                  </h3>
                  <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    {i.description}
                  </p>
                  <button
                    type="button"
                    class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    <span class="flex shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                      {i.createdBy.charAt(0)}
                    </span>
                    {i.createdBy}
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      ))}
      <div class="ps-[7px] flex gap-x-3">
        <button
          type="button"
          class="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
          id="hs-timeline-collapse-content"
          aria-expanded="false"
          aria-controls="hs-timeline-collapse"
          data-hs-collapse="#hs-timeline-collapse"
        >
          <svg
            class="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
          Show older
        </button>
      </div>
    </div>
  );
}

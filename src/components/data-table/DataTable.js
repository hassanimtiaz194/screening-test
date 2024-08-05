export default function DataTable({ data }) {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto min-h-[631px] ">
        <div class="min-w-full inline-block align-middle">
          <div
            data-hs-datatable='{
        "pageLength": 10,
        "pagingOptions": {
          "pageBtnClasses": "min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
        },
        "selecting": true,
        "rowSelectingOptions": {
          "selectAllSelector": "#hs-table-search-checkbox-all"
        },
        "language": {
          "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><svg class=\"shrink-0 size-6 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/></svg><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-gray-600 dark:text-neutral-400\">No search results</p></div></div>"
        }
      }'
          >
            <div class="overflow-hidden min-h-[509px] ">
              <table class="min-w-full">
                <thead class="border-y border-gray-200 dark:border-neutral-700">
                  <tr>
                    <th
                      scope="col"
                      class="py-1 px-3 pe-0 --exclude-from-ordering"
                    >
                      <div class="flex items-center h-5">
                        <input
                          id="hs-table-search-checkbox-all"
                          type="checkbox"
                          class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label
                          for="hs-table-search-checkbox-all"
                          class="sr-only"
                        >
                          Checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-1 group text-start font-normal focus:outline-none"
                    >
                      <div class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                        Name
                        <svg
                          class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
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
                          <path
                            class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                            d="m7 15 5 5 5-5"
                          ></path>
                          <path
                            class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                            d="m7 9 5-5 5 5"
                          ></path>
                        </svg>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="py-1 group text-start font-normal focus:outline-none"
                    >
                      <div class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                        Age
                        <svg
                          class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
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
                          <path
                            class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                            d="m7 15 5 5 5-5"
                          ></path>
                          <path
                            class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                            d="m7 9 5-5 5 5"
                          ></path>
                        </svg>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="py-1 group text-start font-normal focus:outline-none"
                    >
                      <div class="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700">
                        Address
                        <svg
                          class="size-3.5 ms-1 -me-0.5 text-gray-400 dark:text-neutral-500"
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
                          <path
                            class="hs-datatable-ordering-asc:text-blue-600 dark:hs-datatable-ordering-asc:text-blue-500"
                            d="m7 15 5 5 5-5"
                          ></path>
                          <path
                            class="hs-datatable-ordering-desc:text-blue-600 dark:hs-datatable-ordering-desc:text-blue-500"
                            d="m7 9 5-5 5 5"
                          ></path>
                        </svg>
                      </div>
                    </th>

                    <th
                      scope="col"
                      class="py-2 px-3 text-end font-normal text-sm text-gray-500 --exclude-from-ordering dark:text-neutral-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  {data.map((item, index) => (
                    <tr>
                      <td class="py-3 ps-3">
                        <div class="flex items-center h-5">
                          <input
                            id={`hs-table-search-checkbox-${index}`}
                            type="checkbox"
                            class="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            data-hs-datatable-row-selecting-individual=""
                          />
                          <label
                            for={`hs-table-search-checkbox-${index}`}
                            class="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td class="p-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {item.name}
                      </td>
                      <td class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {item.age}
                      </td>
                      <td class="p-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {item.address}
                      </td>
                      <td class="p-3 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

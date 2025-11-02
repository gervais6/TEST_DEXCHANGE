"use client";
import Navbar from "../components/navbar";
import Form from "../components/form";
import Image from 'next/image';
import React from 'react'

export default function Page() {
  return (
    <div className=''>
      <div className="flex flex-col lg:flex-row mt-10  gap-8">
        
        <div className="w-full flex items-start justify-center min-h-full">
          <div className="w-full max-w-7xl">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidde ">
              
              <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="rounded-3xl">
                    <tr>
                      <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Role
                      </th>
                      <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Department
                      </th>
                      <th scope="col" className="px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-8 py-6 text-right text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold text-lg">TC</span>
                            </div>
                          </div>
                          <div className="ml-5">
                            <div className="text-base font-semibold text-gray-900">Tom Cook</div>
                            <div className="text-sm text-gray-500 mt-1">tom.cook@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Senior Developer</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Engineering</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-right text-base font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 font-semibold">Delete</a>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-semibold text-lg">SJ</span>
                            </div>
                          </div>
                          <div className="ml-5">
                            <div className="text-base font-semibold text-gray-900">Sarah Johnson</div>
                            <div className="text-sm text-gray-500 mt-1">sarah.johnson@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Product Designer</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Design</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-right text-base font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 font-semibold">Delete</a>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 font-semibold text-lg">MR</span>
                            </div>
                          </div>
                          <div className="ml-5">
                            <div className="text-base font-semibold text-gray-900">Michael Roberts</div>
                            <div className="text-sm text-gray-500 mt-1">michael.roberts@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Marketing Manager</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Marketing</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          On Leave
                        </span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-right text-base font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 font-semibold">Delete</a>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center">
                              <span className="text-pink-600 font-semibold text-lg">LW</span>
                            </div>
                          </div>
                          <div className="ml-5">
                            <div className="text-base font-semibold text-gray-900">Lisa Wang</div>
                            <div className="text-sm text-gray-500 mt-1">lisa.wang@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Sales Director</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Sales</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-right text-base font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 font-semibold">Delete</a>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-red-600 font-semibold text-lg">DW</span>
                            </div>
                          </div>
                          <div className="ml-5">
                            <div className="text-base font-semibold text-gray-900">David Wilson</div>
                            <div className="text-sm text-gray-500 mt-1">david.wilson@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Frontend Developer</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="text-base text-gray-900 font-medium">Engineering</div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1.5 inline-flex text-sm leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Inactive
                        </span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-right text-base font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold">Edit</a>
                        <a href="#" className="text-red-600 hover:text-red-900 font-semibold">Delete</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="lg:basis-1/3 bg-white rounded-3xl shadow-lg overflow-hidden relative min-h-[500px]">
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Content</h3>
            <p className="text-gray-600">This is the second column that starts aligned with the table.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

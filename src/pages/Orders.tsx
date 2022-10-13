import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective, Resize, 
  Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import useFetch from '../hooks/fetchData'
import axios from 'axios';


function getOrders() {
  const ordersUrl = 'http://localhost:9010/operations'
  return axios.get(ordersUrl)
}

function Orders() {
  let data: any[] = [];
  let isLoading: boolean = true

  const orders = getOrders()
  orders.then((response: any) => {
    data = response.data
  }).catch((error: any) => {
    console.error(error)
  }).finally(() => {
    isLoading = false
  })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Orders' />
      <GridComponent id="overviewgrid" dataSource={data} enableHover={false} enableVirtualization={true} rowHeight={38} height='600' allowFiltering={true} allowSorting={true} allowSelection={true} enableHeaderFocus={true}>
        <ColumnsDirective>
          <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='160' format='C2'></ColumnDirective>
          <ColumnDirective field='Address' headerText='Address' width='240' clipMode="EllipsisWithTooltip" ></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Filter, Sort]} />
      </GridComponent>
    </div>
  )
}

export default Orders
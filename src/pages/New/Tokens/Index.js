import { CopyOutlined, DeleteFilled, SyncOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";
import React from "react";


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'ApiKey',
    dataIndex: 'apikey',
    key: 'apikey',
    render: text => <Input placeholder="API Key"
      value={text}
      className="resize-none rounded-md"
      suffix={<CopyOutlined className="cursor-pointer" />}
      autoSize
    />
  },
  {
    title: 'Last Modified',
    dataIndex: 'lastmodified',
    key: 'lastmodified'
  },
  {
    title: 'URL',
    dataIndex: 'url',
    key: 'url'
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: (_,record) => (
      <div className="flex gap-3">
        <SyncOutlined className="!text-blue-500 cursor-pointer" />
        <DeleteFilled className="!text-red-600 cursor-pointer" />
      </div>
    )
  },

];
const dataSource = [
  {
    id: '1',
    name: "Current Token",
    apikey: "pk.eyJ1IjoidGhvdGlhbmEiLCJhIjoiY2w5aWFsb3A1MDFtMjN2bGxjY2Ezc2poMyJ9.2Jqd5dWr-swO3iS0HlmqwQ",
    lastmodified: '3 Days ago',
    url: 'N/A'
  }
]
function Index() {
  return (
    <div className="sw py-4 ">
      <h2 className="text-white">API Keys</h2>
      <p className="text-white">
        You need an API access token to configure GebetaMaps GL JS, Mobile, and GebetaMaps web services like routing and geocoding.
        Read more about API access tokens in our documentation.
      </p>
      <input type='button' value='+ Create Token' className="btn-sty1 theme-light my-4" />
      <hr />
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default Index;
export interface Provider{
  id:BigInt;
  name:string;
  start_time:string;
  end_time:string;
}

export interface ResponseRequest{
  message:string;
  data: Provider[]
}

export interface Provider{
  id:         number;
  name:       string;
  start_time: string;
  end_time:   string;
}

export interface ResponseRequest{
  message:  string;
  data:     Provider[]
}

export interface ResponseProvider {
  message: string;
  data:    Provider;
}


declare module 'gateway-addon' {
  class Property<D = Device> {
    protected name: string;
    protected device: D;

    constructor(device: D, name: string, propertyDescr: {});
    public setCachedValue(value: any): void;
    public setValue(value: any): Promise<void>;
  }

  class Device<A = Adapter> {
    protected '@context': string;
    protected '@type': string[];
    protected name: string;
    protected description: string;
    public adapter: A;

    constructor(adapter: A, id: string);

    public properties: Map<string, Property>;
    public notifyPropertyChanged(property: Property): void;
    public addAction(name: string, metadata: any): void;
    public getId(): string;
  }

  class Adapter {
    constructor(addonManager: AddonManager, id: string, packageName: string);

    public handleDeviceAdded(device: Device): void;
  }

  type AddonManager = any;
  type Manifest = any;

  class Database {
    constructor(packageName: string, path?: string);

    public open(): Promise<void>;
    public loadConfig(): Promise<any>;
    public saveConfig(config: any): Promise<void>;
  }
}

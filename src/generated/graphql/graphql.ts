/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ActivateUserInput = {
  id: Scalars['String']['input'];
};

export type AddBalanceInput = {
  amount: Scalars['Float']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
};

export type AddShareMeCredentialsPayload = {
  __typename?: 'AddShareMeCredentialsPayload';
  response?: Maybe<Response>;
  userName: Scalars['String']['output'];
};

export type AddStampsCredentialsInput = {
  token: Scalars['String']['input'];
};

export type AddonAnswer = {
  __typename?: 'AddonAnswer';
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  l1?: Maybe<Scalars['Float']['output']>;
  l2?: Maybe<Scalars['Float']['output']>;
  l3?: Maybe<Scalars['Float']['output']>;
  l4?: Maybe<Scalars['Float']['output']>;
  l5?: Maybe<Scalars['Float']['output']>;
  l6?: Maybe<Scalars['Float']['output']>;
  l7?: Maybe<Scalars['Float']['output']>;
  l8?: Maybe<Scalars['Float']['output']>;
  l9?: Maybe<Scalars['Float']['output']>;
  l10?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Address = {
  __typename?: 'Address';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  addressType?: Maybe<AddressType>;
  addressableId?: Maybe<Scalars['String']['output']>;
  addressableType?: Maybe<AddressableType>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['String']['output']>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  taxableReason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type AddressPayload = {
  __typename?: 'AddressPayload';
  address?: Maybe<Address>;
  response?: Maybe<Response>;
};

/** Address information type */
export enum AddressType {
  Billing = 'BILLING',
  Home = 'HOME',
  Office = 'OFFICE',
  Shipping = 'SHIPPING'
}

export type AddressValidationPayload = {
  __typename?: 'AddressValidationPayload';
  addressVerified: Scalars['Boolean']['output'];
  candidateAddress?: Maybe<Array<ShippingAddress>>;
  matchedAddress?: Maybe<ShippingAddress>;
  response?: Maybe<Response>;
};

/** Addressable type */
export enum AddressableType {
  Customer = 'CUSTOMER',
  DropShipping = 'DROP_SHIPPING',
  Manager = 'MANAGER',
  Order = 'ORDER',
  Organization = 'ORGANIZATION',
  Staff = 'STAFF'
}

export type AdminDashboardPayload = {
  __typename?: 'AdminDashboardPayload';
  pendingOrders: Scalars['Int']['output'];
  response?: Maybe<Response>;
  todayOrders: Scalars['Int']['output'];
  todayOrdersSale: Scalars['Float']['output'];
  totalOrdersSale: Scalars['Float']['output'];
};

export type AdvancedOptions = {
  holiday_delivery?: InputMaybe<Scalars['Boolean']['input']>;
  is_pay_on_use?: InputMaybe<Scalars['Boolean']['input']>;
  non_machinable?: InputMaybe<Scalars['Boolean']['input']>;
  saturday_delivery?: InputMaybe<Scalars['Boolean']['input']>;
  special_handling?: InputMaybe<SpecialHandlingInput>;
  sunday_delivery?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  attachmentUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<AttachmentTitle>;
  type?: Maybe<AttachmentType>;
  typeId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type AttachmentPayload = {
  __typename?: 'AttachmentPayload';
  attachment?: Maybe<Attachment>;
  response?: Maybe<Response>;
};

/** Attachment titles */
export enum AttachmentTitle {
  CustomerLicense = 'CUSTOMER_LICENSE',
  CustomerTaxCertificate = 'CUSTOMER_TAX_CERTIFICATE',
  OrgLogo = 'ORG_LOGO',
  ProductThumbnail = 'PRODUCT_THUMBNAIL',
  UserProfile = 'USER_PROFILE'
}

/** The type is assigned */
export enum AttachmentType {
  Customer = 'CUSTOMER',
  Organization = 'ORGANIZATION',
  Product = 'PRODUCT',
  User = 'USER'
}

export type AuthorizeCustomer = {
  __typename?: 'AuthorizeCustomer';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type AuthorizeErrorResponse = {
  __typename?: 'AuthorizeErrorResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  resultCode: Scalars['Int']['output'];
};

export enum AuthorizeValidationMode {
  LiveMode = 'LIVE_MODE',
  TestMode = 'TEST_MODE'
}

export type BridgePayCustomerAccountInput = {
  accountType: BridgePayCustomerAccountType;
  customerId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum BridgePayCustomerAccountType {
  Checking = 'CHECKING',
  Saving = 'SAVING'
}

export type BulkProductStepsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  stepId: Scalars['String']['input'];
};

export type BulkRemoveProductStepInput = {
  ids: Array<Scalars['String']['input']>;
};

export type BulkUpdateAddonsInput = {
  createAddons?: InputMaybe<Array<CreateProductAddonInput>>;
  delAddonsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  delAnswerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  productId: Scalars['String']['input'];
  updateAddons?: InputMaybe<Array<UpdateProductAddonInput>>;
};

export type BulkUpdateOrderInput = {
  orderIds: Array<Scalars['String']['input']>;
};

export type BulkUpdateProductPricingInput = {
  delProductPricingIds?: InputMaybe<Array<Scalars['String']['input']>>;
  productId: Scalars['String']['input'];
  productPricing: Array<UpdateBulkProductPricingInput>;
};

export type BulkUpdateTasksInput = {
  tasks: Array<UpdateTaskInput>;
};

export type CalculateProductStepPayload = {
  __typename?: 'CalculateProductStepPayload';
  response?: Maybe<Response>;
  time?: Maybe<Scalars['Float']['output']>;
};

export type CalculateProductStepsTimeInput = {
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CarrierService = {
  __typename?: 'CarrierService';
  service_name?: Maybe<Scalars['String']['output']>;
  service_type?: Maybe<Scalars['String']['output']>;
};

export type CarrierServicesInput = {
  carrier: Scalars['String']['input'];
};

export type CarrierServicesPayload = {
  __typename?: 'CarrierServicesPayload';
  carrierServices?: Maybe<Array<CarrierService>>;
  response?: Maybe<Response>;
};

export type CategoriesPayload = {
  __typename?: 'CategoriesPayload';
  categories?: Maybe<Array<Category>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  status: CategoryStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CategoryPayload = {
  __typename?: 'CategoryPayload';
  category?: Maybe<Category>;
  response?: Maybe<Response>;
};

export enum CategoryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CheckDiscountCodeInput = {
  code: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  productIds: Array<Scalars['String']['input']>;
};

export type ClosingReportInput = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type ClosingReportPayload = {
  __typename?: 'ClosingReportPayload';
  closingReport: ClosingReportSummaryType;
  response?: Maybe<Response>;
};

export type ClosingReportQueryType = {
  __typename?: 'ClosingReportQueryType';
  paymentCount?: Maybe<Scalars['Int']['output']>;
  paymentTypeName?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalRefundAmount?: Maybe<Scalars['Float']['output']>;
};

export type ClosingReportSummaryType = {
  __typename?: 'ClosingReportSummaryType';
  report: Array<ClosingReportQueryType>;
  totalCount: Scalars['Int']['output'];
  totalPaymentReceived: Scalars['Float']['output'];
  totalPaymentRefunded: Scalars['Float']['output'];
};

export type ComparisonDataPayload = {
  __typename?: 'ComparisonDataPayload';
  productsSoldChange: Scalars['Int']['output'];
  productsSoldPercentageChange: Scalars['Float']['output'];
  salesChange: Scalars['Float']['output'];
  salesPercentageChange: Scalars['Float']['output'];
};

export enum ConfirmationType {
  AdultSignature = 'ADULT_SIGNATURE',
  Delivery = 'DELIVERY',
  DirectSignature = 'DIRECT_SIGNATURE',
  None = 'NONE',
  Signature = 'SIGNATURE',
  Tracking = 'TRACKING'
}

export type Contact = {
  __typename?: 'Contact';
  acceptEmail?: Maybe<Scalars['Boolean']['output']>;
  acceptMessage?: Maybe<Scalars['Boolean']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  ccEmail1?: Maybe<Scalars['String']['output']>;
  ccEmail2?: Maybe<Scalars['String']['output']>;
  contactType?: Maybe<ContactType>;
  contactableId?: Maybe<Scalars['String']['output']>;
  contactableType?: Maybe<ContactableType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  extensionNo?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  contact?: Maybe<Contact>;
  response?: Maybe<Response>;
};

/** Contact information type */
export enum ContactType {
  Emergency = 'EMERGENCY',
  Self = 'SELF'
}

/** Contactable type */
export enum ContactableType {
  Customer = 'CUSTOMER',
  Manager = 'MANAGER',
  Staff = 'STAFF'
}

export type CostDetails = {
  __typename?: 'CostDetails';
  amount?: Maybe<Scalars['Float']['output']>;
  fee_code?: Maybe<Scalars['String']['output']>;
  fee_type?: Maybe<FeeType>;
};

export type CountriesPayload = {
  __typename?: 'CountriesPayload';
  countries?: Maybe<Array<Maybe<Country>>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type Country = {
  __typename?: 'Country';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CreateAddonAnswerInput = {
  l1?: InputMaybe<Scalars['Float']['input']>;
  l2?: InputMaybe<Scalars['Float']['input']>;
  l3?: InputMaybe<Scalars['Float']['input']>;
  l4?: InputMaybe<Scalars['Float']['input']>;
  l5?: InputMaybe<Scalars['Float']['input']>;
  l6?: InputMaybe<Scalars['Float']['input']>;
  l7?: InputMaybe<Scalars['Float']['input']>;
  l8?: InputMaybe<Scalars['Float']['input']>;
  l9?: InputMaybe<Scalars['Float']['input']>;
  l10?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType?: InputMaybe<AddressType>;
  addressableId?: InputMaybe<Scalars['String']['input']>;
  addressableType?: InputMaybe<AddressableType>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  taxableReason?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdminCardInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type CreateAdminCardPayload = {
  __typename?: 'CreateAdminCardPayload';
  clientSecret?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Response>;
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<CategoryStatus>;
};

export type CreateContactInput = {
  acceptEmail?: InputMaybe<Scalars['Boolean']['input']>;
  acceptMessage?: InputMaybe<Scalars['Boolean']['input']>;
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  ccEmail1?: InputMaybe<Scalars['String']['input']>;
  ccEmail2?: InputMaybe<Scalars['String']['input']>;
  contactType?: InputMaybe<ContactType>;
  contactableId?: InputMaybe<Scalars['String']['input']>;
  contactableType?: InputMaybe<ContactableType>;
  extensionNo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerCardInput = {
  customerId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  billingAddress?: InputMaybe<CreateAddressInput>;
  contactInfo?: InputMaybe<CreateContactInput>;
  customer: CustomerInput;
  shippingAddress?: InputMaybe<CreateAddressInput>;
};

export type CreateCustomerProfile = {
  __typename?: 'CreateCustomerProfile';
  id: Scalars['String']['output'];
};

export type CreateDepartmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<DepartmentStatus>;
};

export type CreateDiscountCodeInput = {
  customers?: InputMaybe<Array<Scalars['String']['input']>>;
  discountInput: DiscountCodeInput;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateEmployeeInput = {
  departments?: InputMaybe<Array<Scalars['String']['input']>>;
  emergencyContact?: InputMaybe<CreateContactInput>;
  userAddress?: InputMaybe<CreateAddressInput>;
  userContact?: InputMaybe<CreateContactInput>;
  userInput: UserInput;
};

export type CreateGrandInvoiceInput = {
  customerId: Scalars['String']['input'];
  orderIds: Array<Scalars['String']['input']>;
};

export type CreateGrandInvoicePaymentInput = {
  accountType?: InputMaybe<BridgePayCustomerAccountType>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  isAch?: InputMaybe<Scalars['Boolean']['input']>;
  orderIds: Array<Scalars['String']['input']>;
  paymentToken: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type CreateGrandInvoicePaymentIntentInput = {
  amount: Scalars['Float']['input'];
  orderIds: Array<Scalars['String']['input']>;
  paymentType: StripePaymentIntentType;
  token: Scalars['String']['input'];
};

export type CreateGrandInvoicePaymentIntentPayload = {
  __typename?: 'CreateGrandInvoicePaymentIntentPayload';
  clientSecret: Scalars['String']['output'];
  paymentIntentId: Scalars['String']['output'];
  response?: Maybe<Response>;
};

export type CreateLabelInput = {
  advanced_options?: InputMaybe<AdvancedOptions>;
  delivery_confirmation_type?: InputMaybe<ConfirmationType>;
  fromAddress?: InputMaybe<ShippingAddressType>;
  generateLabel?: InputMaybe<Scalars['Boolean']['input']>;
  insurance?: InputMaybe<InsuranceInput>;
  is_return_label?: InputMaybe<Scalars['Boolean']['input']>;
  orderId: Scalars['String']['input'];
  orderShippingId?: InputMaybe<Scalars['String']['input']>;
  package_type?: InputMaybe<PackageType>;
  service_type?: InputMaybe<Scalars['String']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
  shippingDetail?: InputMaybe<UpdateOrderShipping>;
  toAddress: ShippingAddressType;
};

export type CreateOrderCancelRequestInput = {
  orderId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export type CreateOrderInput = {
  carrier?: InputMaybe<Scalars['String']['input']>;
  dropShippingAddress?: InputMaybe<OrderShippingAddress>;
  orderInput: OrderInput;
  paymentInput?: InputMaybe<OrderPaymentInput>;
  products: Array<OrderProductInput>;
  shippingAddress?: InputMaybe<OrderShippingAddress>;
  shippingServiceId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderItemAddonAnswerInput = {
  addonAnswerId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateOrderItemAddonInput = {
  answer: CreateOrderItemAddonAnswerInput;
  name: Scalars['String']['input'];
  orderItemId?: InputMaybe<Scalars['String']['input']>;
  productAddonId: Scalars['String']['input'];
};

export type CreateOrderPaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** stripe payment method id or authorize payment profile id */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  paymentTypeId: Scalars['String']['input'];
  /** stripe payment intent id */
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderPaymentIntentInput = {
  /** create payment intent against usd amount */
  amount: Scalars['Float']['input'];
  customerId: Scalars['String']['input'];
  grandInvoiceIntent?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethodId: Scalars['String']['input'];
  type?: InputMaybe<StripePaymentIntentType>;
};

export type CreateOrderPaymentIntentPayload = {
  __typename?: 'CreateOrderPaymentIntentPayload';
  clientSecret: Scalars['String']['output'];
  paymentIntentId: Scalars['String']['output'];
  response?: Maybe<Response>;
};

export type CreateOrgGrandInvoicePaymentInput = {
  grandInvoiceId: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  orderIds: Array<Scalars['String']['input']>;
  /** stripe payment method id or authorize payment profile id */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  paymentTypeId: Scalars['String']['input'];
  /** stripe payment intent id */
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrgGrandInvoicePaymentIntentInput = {
  /** create payment intent against usd amount */
  amount: Scalars['Float']['input'];
  customerId: Scalars['String']['input'];
  grandInvoiceId: Scalars['String']['input'];
  orderIds: Array<Scalars['String']['input']>;
  paymentMethodId: Scalars['String']['input'];
  type?: InputMaybe<StripePaymentIntentType>;
};

export type CreateOrgInput = {
  orgAddress?: InputMaybe<CreateAddressInput>;
  organization: OrgInput;
  user: CreateUserInput;
  userAddress?: InputMaybe<CreateAddressInput>;
};

export type CreateOrgSubscriptionInput = {
  endDate: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  status: SubscriptionStatus;
  stripeSubscriptionId: Scalars['String']['input'];
  subscriptionPlanId: Scalars['String']['input'];
};

export type CreatePaymentInput = {
  amount: Scalars['Float']['input'];
  chargedAttemptAt?: InputMaybe<Scalars['String']['input']>;
  invoiceNo: Scalars['String']['input'];
  nextPayment: Scalars['String']['input'];
  orgSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  paidAt?: InputMaybe<Scalars['String']['input']>;
  paymentStatus: PaymentStatus;
  pdfUrl: Scalars['String']['input'];
  stripePaymentId: Scalars['String']['input'];
};

export type CreatePaymentProfile = {
  __typename?: 'CreatePaymentProfile';
  id: Scalars['String']['output'];
};

export type CreatePaymentRefundInput = {
  amount: Scalars['Float']['input'];
  orderPaymentRefunds?: InputMaybe<Array<OrderPaymentRefundInput>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  refundPaymentId: Scalars['String']['input'];
  type: RefundType;
};

export type CreatePaymentTypeInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status?: InputMaybe<PaymentTypeStatus>;
};

export type CreateProductAddonInput = {
  addonAnswerInput: Array<CreateAddonAnswerInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  shortCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  addons?: InputMaybe<Array<CreateProductAddonInput>>;
  productInput: ProductInput;
  productPricing: Array<CreateProductPricingInput>;
  steps?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateProductPricingInput = {
  l1?: InputMaybe<Scalars['Float']['input']>;
  l2?: InputMaybe<Scalars['Float']['input']>;
  l3?: InputMaybe<Scalars['Float']['input']>;
  l4?: InputMaybe<Scalars['Float']['input']>;
  l5?: InputMaybe<Scalars['Float']['input']>;
  l6?: InputMaybe<Scalars['Float']['input']>;
  l7?: InputMaybe<Scalars['Float']['input']>;
  l8?: InputMaybe<Scalars['Float']['input']>;
  l9?: InputMaybe<Scalars['Float']['input']>;
  l10?: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Int']['input'];
};

export type CreateSettingsInput = {
  clientKey?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  stripeApiKey: Scalars['String']['input'];
  stripeApiSecret: Scalars['String']['input'];
  type: PaymentProcessors;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateShippingServiceInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status?: InputMaybe<ShippingServiceStatus>;
};

export type CreateSmsTemplateInput = {
  message: Scalars['String']['input'];
  type: MessageType;
};

export type CreateStripeSubscriptionInput = {
  paymentIntent: Scalars['String']['input'];
  priceId: Scalars['String']['input'];
};

export type CreateSubCategoryInput = {
  categoryId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status: SubCategoryStatus;
};

export type CreateSubDepartmentInput = {
  departmentId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateSubscriptionPlanInput = {
  amount: Scalars['Float']['input'];
  details: Scalars['String']['input'];
  name: Scalars['String']['input'];
  seatCount: Scalars['Int']['input'];
  stripePlanId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSystemAddonAnswerInput = {
  l1?: InputMaybe<Scalars['Float']['input']>;
  l2?: InputMaybe<Scalars['Float']['input']>;
  l3?: InputMaybe<Scalars['Float']['input']>;
  l4?: InputMaybe<Scalars['Float']['input']>;
  l5?: InputMaybe<Scalars['Float']['input']>;
  l6?: InputMaybe<Scalars['Float']['input']>;
  l7?: InputMaybe<Scalars['Float']['input']>;
  l8?: InputMaybe<Scalars['Float']['input']>;
  l9?: InputMaybe<Scalars['Float']['input']>;
  l10?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
};

export type CreateSystemAddonInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortCode?: InputMaybe<Scalars['String']['input']>;
  systemAddonAnswerInput: Array<CreateSystemAddonAnswerInput>;
};

export type CreateTaskInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followOrgTime?: InputMaybe<Scalars['Boolean']['input']>;
  hours?: InputMaybe<Scalars['Int']['input']>;
  minutes?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<TaskStatus>;
};

export type CreateTaxInput = {
  countryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  percentage?: InputMaybe<Scalars['Float']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTransaction = {
  __typename?: 'CreateTransaction';
  id: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateUpdateContactInput = {
  emergencyContact?: InputMaybe<UpdateContact>;
  selfContact?: InputMaybe<UpdateContact>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<UserRoles>;
};

export type Customer = {
  __typename?: 'Customer';
  /** authorize customer id */
  authCustomerId?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  contactInfo?: Maybe<Contact>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['Float']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastOrderDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderPayments?: Maybe<Array<OrderPayment>>;
  organizationId?: Maybe<Scalars['String']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  priceLevel?: Maybe<PricingLevel>;
  pricingLevel?: Maybe<PricingLevelEnum>;
  regular?: Maybe<Scalars['Boolean']['output']>;
  shippingAddress?: Maybe<Address>;
  status?: Maybe<CustomerStatus>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CustomerType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type CustomerAccountPayload = {
  __typename?: 'CustomerAccountPayload';
  account?: Maybe<CustomerPaymentAccountType>;
  response?: Maybe<Response>;
};

export type CustomerAccountsPayload = {
  __typename?: 'CustomerAccountsPayload';
  accounts?: Maybe<Array<CustomerPaymentAccountType>>;
  response?: Maybe<Response>;
};

export type CustomerActivitySummaryPayload = {
  __typename?: 'CustomerActivitySummaryPayload';
  response?: Maybe<Response>;
  totalOrders: Scalars['Int']['output'];
  totalProducts: Scalars['Int']['output'];
  totalSpending: Scalars['Float']['output'];
};

export type CustomerCard = {
  __typename?: 'CustomerCard';
  brand?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastFourDigits?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  /** Authorize or stripe payment method id */
  stripePaymentMethodId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CustomerCardType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerCardPayload = {
  __typename?: 'CustomerCardPayload';
  card?: Maybe<CustomerCard>;
  response?: Maybe<Response>;
};

export type CustomerCardProfile = {
  __typename?: 'CustomerCardProfile';
  billTo?: Maybe<CustomerPaymentProfileBillTo>;
  customerPaymentProfileId?: Maybe<Scalars['String']['output']>;
  customerProfileId?: Maybe<Scalars['String']['output']>;
  originalAuthAmount?: Maybe<Scalars['Float']['output']>;
  originalNetworkTransId?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<CustomerCreditCard>;
};

export enum CustomerCardType {
  Authorize = 'AUTHORIZE',
  Birdgepay = 'BIRDGEPAY',
  Stripe = 'STRIPE'
}

export type CustomerCardsPayload = {
  __typename?: 'CustomerCardsPayload';
  cards?: Maybe<Array<CustomerSavedCardType>>;
  response?: Maybe<Response>;
};

export type CustomerCreditCard = {
  __typename?: 'CustomerCreditCard';
  creditCard?: Maybe<CustomerPaymentCard>;
};

export type CustomerDashboardPayload = {
  __typename?: 'CustomerDashboardPayload';
  dueTodayOrders: Scalars['Int']['output'];
  overDueOrders: Scalars['Int']['output'];
  pendingOrders: Scalars['Int']['output'];
  response?: Maybe<Response>;
};

export type CustomerDocumentPayload = {
  __typename?: 'CustomerDocumentPayload';
  documents?: Maybe<Array<Attachment>>;
  response?: Maybe<Response>;
};

export type CustomerForgotPasswordInput = {
  userName: Scalars['String']['input'];
};

export type CustomerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pricingLevel: PricingLevelEnum;
  regular: Scalars['Boolean']['input'];
  status: CustomerStatus;
  type?: InputMaybe<CustomerType>;
  userName: Scalars['String']['input'];
};

export type CustomerInvitePayload = {
  __typename?: 'CustomerInvitePayload';
  customer?: Maybe<User>;
  response?: Maybe<Response>;
};

export type CustomerLoginInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type CustomerPayload = {
  __typename?: 'CustomerPayload';
  customer?: Maybe<Customer>;
  response?: Maybe<Response>;
};

export type CustomerPaymentAccount = {
  __typename?: 'CustomerPaymentAccount';
  accountNo?: Maybe<Scalars['String']['output']>;
  accountType?: Maybe<Scalars['String']['output']>;
  eCheckType?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  routingNumber?: Maybe<Scalars['String']['output']>;
};

export type CustomerPaymentAccountType = {
  __typename?: 'CustomerPaymentAccountType';
  accountHolderType?: Maybe<Scalars['String']['output']>;
  accountNo?: Maybe<Scalars['String']['output']>;
  accountType?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  routingNumber?: Maybe<Scalars['String']['output']>;
};

export type CustomerPaymentCard = {
  __typename?: 'CustomerPaymentCard';
  cardNumber?: Maybe<Scalars['String']['output']>;
  cardType?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['String']['output']>;
  issuerNumber?: Maybe<Scalars['String']['output']>;
};

export type CustomerPaymentProfileBillTo = {
  __typename?: 'CustomerPaymentProfileBillTo';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type CustomerSavedCardType = {
  __typename?: 'CustomerSavedCardType';
  brand?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastFourDigits?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Authorize or stripe payment method id */
  stripePaymentMethodId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CustomerCardType>;
};

export enum CustomerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum CustomerType {
  Business = 'BUSINESS',
  Individual = 'INDIVIDUAL'
}

export type CustomersPayload = {
  __typename?: 'CustomersPayload';
  customers?: Maybe<Array<Customer>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type DateFilterInput = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type DateRangeInput = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type DeactivateUserInput = {
  id: Scalars['String']['input'];
};

export type DeleteOrgInput = {
  id: Scalars['String']['input'];
};

export type DeleteOrgSubscriptionInput = {
  id: Scalars['String']['input'];
};

export type Department = {
  __typename?: 'Department';
  createdAt?: Maybe<Scalars['String']['output']>;
  departmentId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  status: DepartmentStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type DepartmentPayload = {
  __typename?: 'DepartmentPayload';
  department?: Maybe<Department>;
  response?: Maybe<Response>;
};

export enum DepartmentStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type DepartmentsPayload = {
  __typename?: 'DepartmentsPayload';
  departments?: Maybe<Array<Department>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export enum DimensionType {
  Centimeter = 'CENTIMETER',
  Inch = 'INCH'
}

export type DiscountCode = {
  __typename?: 'DiscountCode';
  amount?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountCustomers?: Maybe<Array<DiscountCustomer>>;
  discountProducts?: Maybe<Array<DiscountProduct>>;
  id: Scalars['String']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  status: DiscountStatus;
  type?: Maybe<DiscountType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  validateUpto?: Maybe<Scalars['String']['output']>;
};

export type DiscountCodeInput = {
  amount: Scalars['Float']['input'];
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  status: DiscountStatus;
  type?: DiscountType;
  validateUpto?: InputMaybe<Scalars['String']['input']>;
};

export type DiscountCodePayload = {
  __typename?: 'DiscountCodePayload';
  discountCode?: Maybe<DiscountCode>;
  response?: Maybe<Response>;
};

export type DiscountCodesPayload = {
  __typename?: 'DiscountCodesPayload';
  discountCodes?: Maybe<Array<DiscountCode>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type DiscountCustomer = {
  __typename?: 'DiscountCustomer';
  createdAt: Scalars['String']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  discountCodeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type DiscountProduct = {
  __typename?: 'DiscountProduct';
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  discountCodeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export enum DiscountStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Type of discount code */
export enum DiscountType {
  FixAmount = 'FIX_AMOUNT',
  Percentage = 'PERCENTAGE'
}

export type DuplicateOrderInput = {
  id: Scalars['String']['input'];
};

export type DuplicateProductInput = {
  id: Scalars['String']['input'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  createdAt: Scalars['String']['output'];
  emailTemplate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  templateType: EmailTemplateType;
  updatedAt: Scalars['String']['output'];
};

export type EmailTemplateInput = {
  subject: Scalars['String']['input'];
  template: Scalars['String']['input'];
  templateType: EmailTemplateType;
};

export type EmailTemplateListPayload = {
  __typename?: 'EmailTemplateListPayload';
  response?: Maybe<Response>;
  templates?: Maybe<Array<EmailTemplate>>;
};

export type EmailTemplatePayload = {
  __typename?: 'EmailTemplatePayload';
  response?: Maybe<Response>;
  template?: Maybe<EmailTemplate>;
};

/** Type of email template */
export enum EmailTemplateType {
  OrderCanceled = 'ORDER_CANCELED',
  OrderCancelRequested = 'ORDER_CANCEL_REQUESTED',
  OrderCancelRequestDeclined = 'ORDER_CANCEL_REQUEST_DECLINED',
  OrderCompleted = 'ORDER_COMPLETED',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderDelivered = 'ORDER_DELIVERED',
  OrderReadyForPickup = 'ORDER_READY_FOR_PICKUP',
  OrderReadyForShipping = 'ORDER_READY_FOR_SHIPPING',
  OrderShipmentCanceled = 'ORDER_SHIPMENT_CANCELED',
  OrderShipped = 'ORDER_SHIPPED'
}

/** The user role assigned */
export enum EmployeeRoles {
  Manager = 'MANAGER',
  Staff = 'STAFF'
}

export enum FeeType {
  Insurance = 'INSURANCE',
  Other = 'OTHER',
  Service = 'SERVICE',
  Tracking = 'TRACKING'
}

export type FetchEmployeeInput = {
  id: Scalars['String']['input'];
};

export type FindAllCategoriesInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CategoryStatus>;
};

export type FindAllCountriesInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllCustomerAccountsInput = {
  customerId: Scalars['String']['input'];
};

export type FindAllCustomerCardsInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllCustomersInput = {
  isRegular?: InputMaybe<Scalars['Boolean']['input']>;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CustomerStatus>;
};

export type FindAllDepartmentsInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DepartmentStatus>;
};

export type FindAllDiscountCodesInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DiscountStatus>;
};

export type FindAllEmployeeInput = {
  paginationOptions: PaginationInput;
  role?: InputMaybe<EmployeeRoles>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatus>;
};

export type FindAllGrandInvoicesInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<GrandInvoiceStatus>;
};

export type FindAllOrderCancelRequestInput = {
  paginationOptions: PaginationInput;
  status?: InputMaybe<RequestStatus>;
};

export type FindAllOrderCancelRequestsPayload = {
  __typename?: 'FindAllOrderCancelRequestsPayload';
  cancelRequests?: Maybe<Array<OrderCancelRequest>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type FindAllOrderPaymentsInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  paymentTypeId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrderPaymentStatus>;
};

export type FindAllOrdersInput = {
  billingStatus?: InputMaybe<OrderBillingStatus>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dateFilter?: InputMaybe<DateFilterInput>;
  isGrandInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  paginationOptions: PaginationInput;
  printed?: InputMaybe<Scalars['Boolean']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllOrgSubscriptionsInput = {
  organizationId: Scalars['String']['input'];
  paginationOptions: PaginationInput;
  status?: InputMaybe<Array<SubscriptionStatus>>;
};

export type FindAllOrgsInput = {
  paginationOptions: PaginationInput;
  planId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrganizationStatus>;
};

export type FindAllPaymentRefundsInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  status?: InputMaybe<PaymentRefundStatus>;
  type?: InputMaybe<RefundType>;
};

export type FindAllPaymentTypesInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PaymentTypeStatus>;
};

export type FindAllPaymentsInput = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  paymentStatus?: InputMaybe<PaymentStatus>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllPricingLevelsInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<PricingLevelSortBy>;
};

export type FindAllProductAddonsInput = {
  paginationOptions: PaginationInput;
  productId: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllProductAddonsPayload = {
  __typename?: 'FindAllProductAddonsPayload';
  pagination: PaginationPayload;
  productAddons?: Maybe<Array<ProductAddon>>;
  response?: Maybe<Response>;
};

export type FindAllProductAnalyticsPayload = {
  __typename?: 'FindAllProductAnalyticsPayload';
  pagination?: Maybe<PaginationPayload>;
  productAnalytics: Array<ProductAnalyticsType>;
  response?: Maybe<Response>;
};

export type FindAllProductsInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<ProductSortBy>;
  status?: InputMaybe<ProductStatus>;
  subCategoryId?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllShippingServicesInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ShippingServiceStatus>;
};

export type FindAllStatesInput = {
  countryId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllStripeProductsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FindAllSubCategoriesInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SubCategoryStatus>;
};

export type FindAllSubDepartmentsInput = {
  departmentId: Scalars['String']['input'];
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllSubscriptionPlansInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllSystemAddonsInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllSystemAddonsPayload = {
  __typename?: 'FindAllSystemAddonsPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  systemAddons?: Maybe<Array<SystemAddon>>;
};

export type FindAllTasksInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SortBy>;
  status?: InputMaybe<TaskStatus>;
};

export type FindAllTaxesInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllUsersInput = {
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatus>;
};

export type FindByTypeInput = {
  type: MessageType;
};

export type FindOneByAddressableIdInput = {
  addressType?: InputMaybe<AddressType>;
  addressableId: Scalars['String']['input'];
  addressableType?: InputMaybe<AddressableType>;
};

export type FindPaymentsByGrandInvoiceIdInput = {
  grandInvoiceId: Scalars['String']['input'];
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  response?: Maybe<Response>;
};

export type GetAddressInput = {
  id: Scalars['String']['input'];
};

export type GetAllOrderPaymentsByGrandInvoiceInput = {
  grandInvoiceId: Scalars['String']['input'];
};

export type GetApiKeyPayload = {
  __typename?: 'GetApiKeyPayload';
  apiKey: Scalars['String']['output'];
  response?: Maybe<Response>;
};

export type GetApplicationFeePayload = {
  __typename?: 'GetApplicationFeePayload';
  amount: Scalars['Float']['output'];
  amountRefundAble: Scalars['Float']['output'];
  applicationFee: Scalars['Float']['output'];
  response?: Maybe<Response>;
};

export type GetAttachmentByTypeInput = {
  title?: InputMaybe<AttachmentTitle>;
  type?: InputMaybe<AttachmentType>;
  typeId: Scalars['String']['input'];
};

export type GetAttachmentInput = {
  id: Scalars['String']['input'];
};

export type GetCategoryInput = {
  id: Scalars['String']['input'];
};

export type GetContactInput = {
  id: Scalars['String']['input'];
};

export type GetCustomerActivitySummaryInput = {
  customerId: Scalars['String']['input'];
  dateFilter: DateFilterInput;
};

export type GetCustomerCardInput = {
  id: Scalars['String']['input'];
};

export type GetCustomerDocumentInput = {
  customerId: Scalars['String']['input'];
  title: Array<AttachmentTitle>;
};

export type GetCustomerInput = {
  id: Scalars['String']['input'];
};

export type GetCustomerSetupIntentInput = {
  id: Scalars['String']['input'];
};

export type GetDepartmentInput = {
  id: Scalars['String']['input'];
};

export type GetDiscountCodeInput = {
  id: Scalars['String']['input'];
};

export type GetEmailTemplateInput = {
  templateType: EmailTemplateType;
};

export type GetGrandInvoiceByTokenInput = {
  token: Scalars['String']['input'];
};

export type GetGrandInvoiceInput = {
  id: Scalars['String']['input'];
};

export type GetOrderCancelRequestInput = {
  id: Scalars['String']['input'];
};

export type GetOrderCancelRequestPayLoad = {
  __typename?: 'GetOrderCancelRequestPayLoad';
  cancelRequests?: Maybe<OrderCancelRequest>;
  response?: Maybe<Response>;
};

export type GetOrderInput = {
  id: Scalars['String']['input'];
  orderStatus?: InputMaybe<OrderStatus>;
  orderType?: InputMaybe<OrderType>;
};

export type GetOrderPaymentInput = {
  id: Scalars['String']['input'];
};

export type GetOrderTaxById = {
  orderId: Scalars['String']['input'];
};

export type GetOrgActiveSettingInput = {
  orgId: Scalars['String']['input'];
};

export type GetOrgInput = {
  id: Scalars['String']['input'];
};

export type GetOrgSubscriptionInput = {
  id: Scalars['String']['input'];
};

export type GetPaymentInput = {
  id: Scalars['String']['input'];
};

export type GetPaymentTypeInput = {
  id: Scalars['String']['input'];
};

export type GetPricingLevelInput = {
  id: Scalars['String']['input'];
};

export type GetProductActivitySummaryInput = {
  dateFilter: DateFilterInput;
};

export type GetProductAddonInput = {
  id: Scalars['String']['input'];
};

export type GetProductAnalyticsInput = {
  dateFilter: DateFilterInput;
  paginationOptions: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetProductInput = {
  id: Scalars['String']['input'];
};

export type GetProductPricingInput = {
  id: Scalars['String']['input'];
};

export type GetProductStepInput = {
  id: Scalars['String']['input'];
};

export type GetRefundsByOrderPaymentIdInput = {
  grandInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  orderPaymentId: Scalars['String']['input'];
};

export type GetSalesReportSummaryInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  dateFilter: DateFilterInput;
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type GetSettingByOrgIdInput = {
  type: PaymentProcessors;
};

export type GetSettingsInput = {
  id: Scalars['String']['input'];
};

export type GetShippingServiceInput = {
  id: Scalars['String']['input'];
};

export type GetSubCategoryInput = {
  id: Scalars['String']['input'];
};

export type GetSubDepartmentInput = {
  id: Scalars['String']['input'];
};

export type GetSubscriptionPlanInput = {
  id: Scalars['String']['input'];
};

export type GetSystemAddonInput = {
  id: Scalars['String']['input'];
};

export type GetTaskInput = {
  id: Scalars['String']['input'];
};

export type GetTaxInput = {
  id: Scalars['String']['input'];
};

export type GetYearlySalesDataInput = {
  year: Scalars['Int']['input'];
};

export type GrandInvoice = {
  __typename?: 'GrandInvoice';
  amount?: Maybe<Scalars['Float']['output']>;
  billableAmount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  grandInvoicePayments: Array<GrandInvoicePayment>;
  id: Scalars['String']['output'];
  /**  stripe or authorize invoice id */
  invoiceId?: Maybe<Scalars['String']['output']>;
  invoiceNo: Scalars['Float']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Array<Maybe<Order>>>;
  organizationId?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentIntentId?: Maybe<Scalars['String']['output']>;
  paymentProcessorType?: Maybe<PaymentProcessors>;
  paymentType?: Maybe<PaymentType>;
  paymentTypeId?: Maybe<Scalars['String']['output']>;
  receivedAt?: Maybe<Scalars['String']['output']>;
  refundAmount?: Maybe<Scalars['Float']['output']>;
  refundStatus?: Maybe<PaymentRefundStatus>;
  status?: Maybe<GrandInvoiceStatus>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type GrandInvoicePayload = {
  __typename?: 'GrandInvoicePayload';
  grandInvoice?: Maybe<GrandInvoice>;
  response?: Maybe<Response>;
};

export type GrandInvoicePayment = {
  __typename?: 'GrandInvoicePayment';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  grandInvoiceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentIntentId?: Maybe<Scalars['String']['output']>;
  paymentProcessor?: Maybe<PaymentProcessors>;
  paymentType?: Maybe<PaymentType>;
  paymentTypeId?: Maybe<Scalars['String']['output']>;
  receivedAt?: Maybe<Scalars['String']['output']>;
  refundAmount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<OrderPaymentStatus>;
  updatedAt: Scalars['String']['output'];
};

export type GrandInvoicePaymentsPayload = {
  __typename?: 'GrandInvoicePaymentsPayload';
  payments?: Maybe<Array<GrandInvoicePayment>>;
  response?: Maybe<Response>;
};

export enum GrandInvoiceStatus {
  Draft = 'DRAFT',
  Failed = 'FAILED',
  Open = 'OPEN',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  Processing = 'PROCESSING',
  Uncollectible = 'UNCOLLECTIBLE',
  Void = 'VOID'
}

export type GrandInvoicesPayload = {
  __typename?: 'GrandInvoicesPayload';
  grandInvoices?: Maybe<Array<GrandInvoice>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type IShippingOption = {
  __typename?: 'IShippingOption';
  carrier: Scalars['String']['output'];
  services?: Maybe<Array<CarrierService>>;
};

export type InsuranceInput = {
  insurance_provider?: InputMaybe<InsuranceProvider>;
  insured_value?: InputMaybe<InsuredValueInput>;
};

export enum InsuranceProvider {
  Carrier = 'CARRIER',
  ParcelGuard = 'PARCEL_GUARD',
  StampsCom = 'STAMPS_COM'
}

export type InsuredValueInput = {
  amount: Scalars['Float']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
};

export type InviteCustomerInput = {
  customerId: Scalars['String']['input'];
};

export type LabelHref = {
  __typename?: 'LabelHref';
  href: Scalars['String']['output'];
};

export type LabelInput = {
  advanced_options?: InputMaybe<AdvancedOptions>;
  delivery_confirmation_type?: InputMaybe<ConfirmationType>;
  insurance?: InputMaybe<InsuranceInput>;
  is_return_label?: InputMaybe<Scalars['Boolean']['input']>;
  package_type?: InputMaybe<PackageType>;
  service_type?: InputMaybe<Scalars['String']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
};

export type LabelPayload = {
  __typename?: 'LabelPayload';
  response?: Maybe<Response>;
  shippingLabel: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  response?: Maybe<Response>;
  token: Scalars['String']['output'];
};

export type MerchantProfile = {
  __typename?: 'MerchantProfile';
  validationMode?: Maybe<AuthorizeValidationMode>;
};

/** message type according to order status */
export enum MessageType {
  OrderCanceled = 'ORDER_CANCELED',
  OrderCompleted = 'ORDER_COMPLETED',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderDelivered = 'ORDER_DELIVERED',
  OrderReadyForPickup = 'ORDER_READY_FOR_PICKUP',
  OrderReadyForShipping = 'ORDER_READY_FOR_SHIPPING',
  OrderShipmentCanceled = 'ORDER_SHIPMENT_CANCELED',
  OrderShipped = 'ORDER_SHIPPED'
}

export type MonthlyDataPayload = {
  __typename?: 'MonthlyDataPayload';
  month: Scalars['String']['output'];
  productsSold: Scalars['Int']['output'];
  totalSales: Scalars['Float']['output'];
  year: Scalars['Int']['output'];
};

export type MonthlySalesComparisonPayload = {
  __typename?: 'MonthlySalesComparisonPayload';
  comparison: ComparisonDataPayload;
  currentMonth: MonthlyDataPayload;
  lastMonth: MonthlyDataPayload;
  response?: Maybe<Response>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: UserPayload;
  addBalance: StampsBalanceResponsePayload;
  addCard: CreateAdminCardPayload;
  addShareMeCredentials: AddShareMeCredentialsPayload;
  addStampsCredentials: StampsPayload;
  bulkRemoveProductStep: ProductStepPayload;
  bulkUpdateAddons: ResponsePayload;
  bulkUpdateOrder: ResponsePayload;
  bulkUpdateProductPricing: ProductPricingPayload;
  bulkUpdateTasks: TaskPayload;
  changePassword: UserPayload;
  createAddress: AddressPayload;
  createAuthorizeCustomerAccount: CustomerAccountPayload;
  createBridgePayCustomerAccount: CustomerAccountPayload;
  createCategory: CategoryPayload;
  createContact: ContactPayload;
  createCustomer: CustomerPayload;
  createCustomerCard: CustomerCardPayload;
  createDepartment: DepartmentPayload;
  createDiscountCode: DiscountCodePayload;
  createEmailTemplate: ResponsePayload;
  createEmployee: UserPayload;
  createGrandInvoice: GrandInvoicePayload;
  createGrandInvoicePayment: ResponsePayload;
  createGrandInvoicePaymentIntent: CreateGrandInvoicePaymentIntentPayload;
  createLabel: ShippingLabelPayload;
  createOrder: OrderPayload;
  createOrderCancelRequest: ResponsePayload;
  createOrderPayment: OrderPaymentPayload;
  createOrderPaymentIntent: CreateOrderPaymentIntentPayload;
  createOrg: OrgPayload;
  createOrgGrandInvoicePayment: ResponsePayload;
  createOrgGrandInvoicePaymentIntent: CreateOrderPaymentIntentPayload;
  createOrgSubscription: OrgSubscriptionPayload;
  createPayment: PaymentPayload;
  createPaymentRefund: PaymentRefundPayload;
  createPaymentType: PaymentTypePayload;
  createProduct: ProductPayload;
  createSettings: SettingsPayload;
  createShippingService: ShippingServicePayload;
  createSmsTemplate: ResponsePayload;
  createStripeSubscription: StripeSubscriptionPayload;
  createSubCategory: ResponsePayload;
  createSubDepartment: SubDepartmentPayload;
  createSubscriptionPlan: SubscriptionPlanPayload;
  createSystemAddon: SystemAddonPayload;
  createTask: TaskPayload;
  createTax: TaxPayload;
  customerForgotPassword: ForgotPasswordPayload;
  deactivateUser: UserPayload;
  deleteOrg: OrgPayload;
  deleteOrgSubscription: OrgSubscriptionPayload;
  duplicateOrder: OrderPayload;
  duplicateProduct: ProductPayload;
  forgotPassword: ForgotPasswordPayload;
  getRates: StampsRatesResponsePayload;
  inviteCustomer: CustomerInvitePayload;
  login: LoginPayload;
  loginCustomer: LoginPayload;
  regenerateApiKey: GetApiKeyPayload;
  reminderInvoicePayment: GrandInvoicePayload;
  removeAttachment: AttachmentPayload;
  removeCard: ResponsePayload;
  removeCategory: CategoryPayload;
  removeCustomerAccount: CustomerAccountPayload;
  removeCustomerCard: CustomerCardPayload;
  removeDepartment: DepartmentPayload;
  removeDocument: ResponsePayload;
  removePaymentType: PaymentTypePayload;
  removeProductStep: ProductStepPayload;
  removeShippingService: ShippingServicePayload;
  removeStaffDepartments: UserPayload;
  removeSubDepartment: SubDepartmentPayload;
  removeSubscriptionPlan: SubscriptionPlanPayload;
  removeSystemAddon: SystemAddonPayload;
  removeTax: TaxPayload;
  resendVerificationEmail: UserPayload;
  setDefaultCard: ResponsePayload;
  updateAddress: AddressPayload;
  updateAddressShippingDetails: OrderPayload;
  updateAdminInfo: ResponsePayload;
  updateBulkProductSteps: ProductBulkStepsPayload;
  updateCategory: CategoryPayload;
  updateContact: ContactPayload;
  updateContactInfo: UserPayload;
  updateCustomer: ResponsePayload;
  updateCustomerBillingInfo: CustomerPayload;
  updateDepartment: DepartmentPayload;
  updateDiscountCode: DiscountCodePayload;
  updateDiscountProductsAndCustomer: DiscountCodePayload;
  updateEmployee: UserPayload;
  updateEmployeeBasicInfo: UserPayload;
  updateEmployeeContactInfo: UserPayload;
  updateOrder: OrderPayload;
  updateOrderCancelRequest: ResponsePayload;
  updateOrderShippingDetail: OrderPayload;
  updateOrderStatus: OrderPayload;
  updateOrderStep: OrderItemStepPayload;
  updateOrg: OrgPayload;
  updateOrgInfo: ResponsePayload;
  updateOrgSubscription: OrgSubscriptionPayload;
  updatePayment: PaymentPayload;
  updatePaymentType: PaymentTypePayload;
  updatePricingLevel: PricingLevelPayload;
  updateProduct: ProductPayload;
  updateProductStep: ProductStepPayload;
  updateSettingProcessor: SettingsPayload;
  updateSettings: SettingsPayload;
  updateShippingService: ShippingServicePayload;
  updateStaff: UserPayload;
  updateStaffBasicInfo: UserPayload;
  updateStaffDepartments: UserPayload;
  updateSubCategory: ResponsePayload;
  updateSubDepartment: SubDepartmentPayload;
  updateSubscriptionPlan: SubscriptionPlanPayload;
  updateSystemAddon: SystemAddonPayload;
  updateTask: TaskPayload;
  updateTax: TaxPayload;
  updateUser: UserPayload;
  verifyEmailAndSetPassword: UserPayload;
  voidLabel: ResponsePayload;
};


export type MutationActivateUserArgs = {
  activateUserInput: ActivateUserInput;
};


export type MutationAddBalanceArgs = {
  addBalanceInput: AddBalanceInput;
};


export type MutationAddCardArgs = {
  createAdminCardInput: CreateAdminCardInput;
};


export type MutationAddShareMeCredentialsArgs = {
  shareMeCredentialsInput: ShareMeCredentialsInput;
};


export type MutationAddStampsCredentialsArgs = {
  addStampsCredentialsInput: AddStampsCredentialsInput;
};


export type MutationBulkRemoveProductStepArgs = {
  bulkRemoveProductStepInput: BulkRemoveProductStepInput;
};


export type MutationBulkUpdateAddonsArgs = {
  bulkUpdateAddonsInput: BulkUpdateAddonsInput;
};


export type MutationBulkUpdateOrderArgs = {
  bulkUpdateOrderInput: BulkUpdateOrderInput;
};


export type MutationBulkUpdateProductPricingArgs = {
  bulkUpdateProductPricingInput: BulkUpdateProductPricingInput;
};


export type MutationBulkUpdateTasksArgs = {
  bulkUpdateTasksInput: BulkUpdateTasksInput;
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateAuthorizeCustomerAccountArgs = {
  createCustomerCardInput: CreateCustomerCardInput;
};


export type MutationCreateBridgePayCustomerAccountArgs = {
  bridgePayCustomerAccountInput: BridgePayCustomerAccountInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateContactArgs = {
  createContactInput: CreateContactInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateCustomerCardArgs = {
  createCustomerCardInput: CreateCustomerCardInput;
};


export type MutationCreateDepartmentArgs = {
  createDepartmentInput: CreateDepartmentInput;
};


export type MutationCreateDiscountCodeArgs = {
  createDiscountCodeInput: CreateDiscountCodeInput;
};


export type MutationCreateEmailTemplateArgs = {
  emailTemplateInput: EmailTemplateInput;
};


export type MutationCreateEmployeeArgs = {
  createEmployeeInput: CreateEmployeeInput;
};


export type MutationCreateGrandInvoiceArgs = {
  createGrandInvoiceInput: CreateGrandInvoiceInput;
};


export type MutationCreateGrandInvoicePaymentArgs = {
  createGrandInvoicePaymentInput: CreateGrandInvoicePaymentInput;
};


export type MutationCreateGrandInvoicePaymentIntentArgs = {
  createGrandInvoicePaymentIntentInput: CreateGrandInvoicePaymentIntentInput;
};


export type MutationCreateLabelArgs = {
  createLabelInput: CreateLabelInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateOrderCancelRequestArgs = {
  createOrderCancelRequestInput: CreateOrderCancelRequestInput;
};


export type MutationCreateOrderPaymentArgs = {
  createOrderPaymentInput: CreateOrderPaymentInput;
};


export type MutationCreateOrderPaymentIntentArgs = {
  createOrderPaymentIntentInput: CreateOrderPaymentIntentInput;
};


export type MutationCreateOrgArgs = {
  createOrgInput: CreateOrgInput;
};


export type MutationCreateOrgGrandInvoicePaymentArgs = {
  createOrgGrandInvoicePaymentInput: CreateOrgGrandInvoicePaymentInput;
};


export type MutationCreateOrgGrandInvoicePaymentIntentArgs = {
  createOrgGrandInvoicePaymentIntentInput: CreateOrgGrandInvoicePaymentIntentInput;
};


export type MutationCreateOrgSubscriptionArgs = {
  createOrgSubscriptionInput: CreateOrgSubscriptionInput;
};


export type MutationCreatePaymentArgs = {
  createPaymentInput: CreatePaymentInput;
};


export type MutationCreatePaymentRefundArgs = {
  createPaymentRefundInput: CreatePaymentRefundInput;
};


export type MutationCreatePaymentTypeArgs = {
  createPaymentTypeInput: CreatePaymentTypeInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSettingsArgs = {
  createSettingsInput: CreateSettingsInput;
};


export type MutationCreateShippingServiceArgs = {
  createShippingServiceInput: CreateShippingServiceInput;
};


export type MutationCreateSmsTemplateArgs = {
  createSmsTemplateInput: CreateSmsTemplateInput;
};


export type MutationCreateStripeSubscriptionArgs = {
  createStripeSubscriptionInput: CreateStripeSubscriptionInput;
};


export type MutationCreateSubCategoryArgs = {
  createSubCategoryInput: CreateSubCategoryInput;
};


export type MutationCreateSubDepartmentArgs = {
  createSubDepartmentInput: CreateSubDepartmentInput;
};


export type MutationCreateSubscriptionPlanArgs = {
  createSubscriptionPlanInput: CreateSubscriptionPlanInput;
};


export type MutationCreateSystemAddonArgs = {
  createSystemAddonInput: CreateSystemAddonInput;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationCreateTaxArgs = {
  createTaxInput: CreateTaxInput;
};


export type MutationCustomerForgotPasswordArgs = {
  customerForgotPasswordInput: CustomerForgotPasswordInput;
};


export type MutationDeactivateUserArgs = {
  deactivateUserInput: DeactivateUserInput;
};


export type MutationDeleteOrgArgs = {
  deleteOrgInput: DeleteOrgInput;
};


export type MutationDeleteOrgSubscriptionArgs = {
  deleteOrgSubscriptionInput: DeleteOrgSubscriptionInput;
};


export type MutationDuplicateOrderArgs = {
  duplicateOrderInput: DuplicateOrderInput;
};


export type MutationDuplicateProductArgs = {
  duplicateProductInput: DuplicateProductInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationGetRatesArgs = {
  shippingRatesInput: ShippingRatesInput;
};


export type MutationInviteCustomerArgs = {
  inviteCustomerInput: InviteCustomerInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationLoginCustomerArgs = {
  customerLoginInput: CustomerLoginInput;
};


export type MutationReminderInvoicePaymentArgs = {
  getGrandInvoiceInput: GetGrandInvoiceInput;
};


export type MutationRemoveAttachmentArgs = {
  removeAttachmentInput: RemoveAttachmentInput;
};


export type MutationRemoveCardArgs = {
  removeStripeCardInput: RemoveStripeCardInput;
};


export type MutationRemoveCategoryArgs = {
  removeCategoryInput: RemoveCategoryInput;
};


export type MutationRemoveCustomerAccountArgs = {
  removeCustomerAccountInput: RemoveCustomerAccountInput;
};


export type MutationRemoveCustomerCardArgs = {
  removeCustomerCardInput: RemoveCustomerCardInput;
};


export type MutationRemoveDepartmentArgs = {
  removeDepartmentInput: RemoveDepartmentInput;
};


export type MutationRemoveDocumentArgs = {
  removeAttachmentInput: RemoveAttachmentInput;
};


export type MutationRemovePaymentTypeArgs = {
  removePaymentTypeInput: RemovePaymentTypeInput;
};


export type MutationRemoveProductStepArgs = {
  removeProductStepInput: RemoveProductStepInput;
};


export type MutationRemoveShippingServiceArgs = {
  removeShippingServiceInput: RemoveShippingServiceInput;
};


export type MutationRemoveStaffDepartmentsArgs = {
  removeStaffDepartmentsInput: RemoveStaffDepartmentsInput;
};


export type MutationRemoveSubDepartmentArgs = {
  removeSubDepartmentInput: RemoveSubDepartmentInput;
};


export type MutationRemoveSubscriptionPlanArgs = {
  removeSubscriptionPlanInput: RemoveSubscriptionPlanInput;
};


export type MutationRemoveSystemAddonArgs = {
  removeSystemAddonInput: RemoveSystemAddonInput;
};


export type MutationRemoveTaxArgs = {
  removeTaxInput: RemoveTaxInput;
};


export type MutationResendVerificationEmailArgs = {
  resendVerificationEmailInput: ResendVerificationEmailInput;
};


export type MutationSetDefaultCardArgs = {
  setDefaultCardInput: SetDefaultCardInput;
};


export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateAddressShippingDetailsArgs = {
  updateAddressShippingDetails: UpdateAddressShippingDetails;
};


export type MutationUpdateAdminInfoArgs = {
  updateAdminInfo: UpdateAdminInfo;
};


export type MutationUpdateBulkProductStepsArgs = {
  updateBulkProductStepsInput: UpdateBulkProductStepsInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateContactArgs = {
  updateContactInput: UpdateContactInput;
};


export type MutationUpdateContactInfoArgs = {
  createUpdateContactInput: CreateUpdateContactInput;
};


export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateCustomerBillingInfoArgs = {
  updateCustomerBillingInfoInput: UpdateCustomerBillingInfoInput;
};


export type MutationUpdateDepartmentArgs = {
  updateDepartmentInput: UpdateDepartmentInput;
};


export type MutationUpdateDiscountCodeArgs = {
  updateDiscountCodeInput: UpdateDiscountCodeInput;
};


export type MutationUpdateDiscountProductsAndCustomerArgs = {
  updateDiscountProductsAndCustomerInput: UpdateDiscountProductsAndCustomerInput;
};


export type MutationUpdateEmployeeArgs = {
  updateEmployeeInput: UpdateEmployeeInput;
};


export type MutationUpdateEmployeeBasicInfoArgs = {
  updateEmployeeBasicInfoInput: UpdateEmployeeBasicInfoInput;
};


export type MutationUpdateEmployeeContactInfoArgs = {
  updateEmployeeContactInfo: UpdateEmployeeContactInfo;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateOrderCancelRequestArgs = {
  updateOrderCancelRequestInput: UpdateOrderCancelRequestInput;
};


export type MutationUpdateOrderShippingDetailArgs = {
  updateOrderShippingDetailInput: UpdateOrderShippingDetailInput;
};


export type MutationUpdateOrderStatusArgs = {
  updateOrderStatusInput: UpdateOrderStatusInput;
};


export type MutationUpdateOrderStepArgs = {
  updateOrderStepInput: UpdateOrderStepInput;
};


export type MutationUpdateOrgArgs = {
  updateOrgInput: UpdateOrgInput;
};


export type MutationUpdateOrgInfoArgs = {
  updateOrgInfo: UpdateOrgInfo;
};


export type MutationUpdateOrgSubscriptionArgs = {
  updateOrgSubscriptionInput: UpdateOrgSubscriptionInput;
};


export type MutationUpdatePaymentArgs = {
  updatePaymentInput: UpdatePaymentInput;
};


export type MutationUpdatePaymentTypeArgs = {
  updatePaymentTypeInput: UpdatePaymentTypeInput;
};


export type MutationUpdatePricingLevelArgs = {
  updatePricingLevelInput: UpdatePricingLevelInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProductStepArgs = {
  updateProductStepInput: UpdateProductStepInput;
};


export type MutationUpdateSettingProcessorArgs = {
  updateSettingProcessorInput: UpdateSettingProcessorInput;
};


export type MutationUpdateSettingsArgs = {
  updateSettingsInput: UpdateSettingsInput;
};


export type MutationUpdateShippingServiceArgs = {
  updateShippingServiceInput: UpdateShippingServiceInput;
};


export type MutationUpdateStaffArgs = {
  updateStaffInput: UpdateStaffInput;
};


export type MutationUpdateStaffBasicInfoArgs = {
  updateStaffBasicInfoInput: UpdateStaffBasicInfoInput;
};


export type MutationUpdateStaffDepartmentsArgs = {
  updateStaffDepartmentsInput: UpdateStaffDepartmentsInput;
};


export type MutationUpdateSubCategoryArgs = {
  updateSubCategoryInput: UpdateSubCategoryInput;
};


export type MutationUpdateSubDepartmentArgs = {
  updateSubDepartmentInput: UpdateSubDepartmentInput;
};


export type MutationUpdateSubscriptionPlanArgs = {
  updateSubscriptionPlanInput: UpdateSubscriptionPlanInput;
};


export type MutationUpdateSystemAddonArgs = {
  updateSystemAddonInput: UpdateSystemAddonInput;
};


export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};


export type MutationUpdateTaxArgs = {
  updateTaxInput: UpdateTaxInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationVerifyEmailAndSetPasswordArgs = {
  verifyEmailAndSetPasswordInput: VerifyUserAndUpdatePasswordInput;
};


export type MutationVoidLabelArgs = {
  voidLabelInput: VoidLabelInput;
};

export type Order = {
  __typename?: 'Order';
  billableAmount?: Maybe<Scalars['Float']['output']>;
  billingAddressId?: Maybe<Scalars['String']['output']>;
  billingStatus?: Maybe<OrderBillingStatus>;
  createdAt?: Maybe<Scalars['String']['output']>;
  creatorId?: Maybe<Scalars['String']['output']>;
  currentStep?: Maybe<OrderItemStep>;
  currentStepId?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  delNote?: Maybe<Scalars['String']['output']>;
  delUser?: Maybe<User>;
  delUserId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  deletedById?: Maybe<Scalars['String']['output']>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  discountCode?: Maybe<DiscountCode>;
  discountCodeId?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<DiscountType>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  dropShip?: Maybe<Scalars['Boolean']['output']>;
  dropShippingAddress?: Maybe<Address>;
  expectedDeliveryDate?: Maybe<Scalars['String']['output']>;
  externalOrderId?: Maybe<Scalars['String']['output']>;
  grandInvoiceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  orderCancelRequest?: Maybe<OrderCancelRequest>;
  orderCreation?: Maybe<OrderCreation>;
  orderItems?: Maybe<Array<OrderItem>>;
  orderNo: Scalars['Float']['output'];
  orderPayments?: Maybe<Array<OrderPayment>>;
  orderPrinted?: Maybe<Scalars['Boolean']['output']>;
  orderShipping?: Maybe<OrderShipping>;
  orderStatus?: Maybe<OrderStatus>;
  orderSteps?: Maybe<Array<OrderItemStep>>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  productCount?: Maybe<Scalars['Int']['output']>;
  purchaseOrder?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<Address>;
  shippingAddressId?: Maybe<Scalars['String']['output']>;
  shippingNo?: Maybe<Scalars['String']['output']>;
  shippingService?: Maybe<ShippingService>;
  shippingServiceId?: Maybe<Scalars['String']['output']>;
  tax?: Maybe<OrderTax>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<OrderType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  webhook?: Maybe<Scalars['String']['output']>;
};

/** Billing status of an order */
export enum OrderBillingStatus {
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
  Unpaid = 'UNPAID'
}

export type OrderCancelRequest = {
  __typename?: 'OrderCancelRequest';
  createdAt: Scalars['String']['output'];
  declineReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  reason: Scalars['String']['output'];
  status: RequestStatus;
  updatedAt: Scalars['String']['output'];
};

/** How order is created */
export enum OrderCreation {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
  Xml = 'XML'
}

export type OrderInput = {
  customerId: Scalars['String']['input'];
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  discountCodeId?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  dropShip?: InputMaybe<Scalars['Boolean']['input']>;
  /** String should be in the format (0000-00-00T00:00:00+00:00) */
  expectedDeliveryTime?: InputMaybe<Scalars['String']['input']>;
  externalOrderId?: InputMaybe<Scalars['String']['input']>;
  isQuote?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderDiscountType?: InputMaybe<DiscountType>;
  purchaseOrder?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  shippingNo?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<OrderType>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  deletedById?: Maybe<Scalars['String']['output']>;
  discountable?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  orderItemAddons?: Maybe<Array<OrderItemAddon>>;
  orderItemAddonsCount?: Maybe<Scalars['Int']['output']>;
  orderItemPrices?: Maybe<Array<ProductPricing>>;
  orderItemSteps?: Maybe<Array<OrderItemStep>>;
  organizationId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  productPriceId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  thumbnail?: Maybe<Attachment>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type OrderItemAddon = {
  __typename?: 'OrderItemAddon';
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  deletedById?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orderItemAddonAnswer?: Maybe<OrderItemAddonAnswer>;
  orderItemId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  productAddonId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type OrderItemAddonAnswer = {
  __typename?: 'OrderItemAddonAnswer';
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orderItemAddonId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productAddonAnswerId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type OrderItemStep = {
  __typename?: 'OrderItemStep';
  createdAt?: Maybe<Scalars['String']['output']>;
  days?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  minutes?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  orderItemId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  productStepId?: Maybe<Scalars['String']['output']>;
  turnAroundDuration?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type OrderItemStepPayload = {
  __typename?: 'OrderItemStepPayload';
  orderItemStep?: Maybe<OrderItemStep>;
  response?: Maybe<Response>;
};

export type OrderPayload = {
  __typename?: 'OrderPayload';
  order?: Maybe<Order>;
  response?: Maybe<Response>;
};

export type OrderPayment = {
  __typename?: 'OrderPayment';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  grandInvoicePaymentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  invoiceNo?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  paymentProcessor?: Maybe<PaymentProcessors>;
  paymentRefunds?: Maybe<Array<PaymentRefund>>;
  paymentType?: Maybe<PaymentType>;
  paymentTypeId?: Maybe<Scalars['String']['output']>;
  receivedAt?: Maybe<Scalars['String']['output']>;
  refundAmount?: Maybe<Scalars['Float']['output']>;
  refundStatus?: Maybe<PaymentRefundStatus>;
  status?: Maybe<OrderPaymentStatus>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OrderPaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  /** stripe payment method id or authorize payment profile id */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  paymentTypeId: Scalars['String']['input'];
  /** stripe payment intent id */
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderPaymentPayload = {
  __typename?: 'OrderPaymentPayload';
  orderPayment?: Maybe<OrderPayment>;
  response?: Maybe<Response>;
};

export type OrderPaymentRefundInput = {
  orderPaymentId: Scalars['String']['input'];
  refundAmount: Scalars['Float']['input'];
};

export type OrderPaymentRefundPayload = {
  __typename?: 'OrderPaymentRefundPayload';
  paymentRefunds?: Maybe<Array<PaymentRefund>>;
  response?: Maybe<Response>;
};

export enum OrderPaymentStatus {
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Unpaid = 'UNPAID',
  Void = 'VOID'
}

export type OrderPaymentsByGrandInvoicePayload = {
  __typename?: 'OrderPaymentsByGrandInvoicePayload';
  orderPayments?: Maybe<Array<OrderPayment>>;
  response?: Maybe<Response>;
};

export type OrderPaymentsPayload = {
  __typename?: 'OrderPaymentsPayload';
  orderPayments?: Maybe<Array<OrderPayment>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type OrderProductInput = {
  addons?: InputMaybe<Array<CreateOrderItemAddonInput>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderProductsReportInput = {
  billingStatus?: InputMaybe<OrderBillingStatus>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  dateFilter?: InputMaybe<DateFilterInput>;
  isGrandInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  paginationOptions: PaginationInput;
  printed?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type OrderProductsReportPayload = {
  __typename?: 'OrderProductsReportPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  result?: Maybe<Array<OrderProductsReportSummaryType>>;
};

export type OrderProductsReportSummary = {
  __typename?: 'OrderProductsReportSummary';
  response?: Maybe<Response>;
  result?: Maybe<OrderProductsReportSummaryType>;
};

export type OrderProductsReportSummaryType = {
  __typename?: 'OrderProductsReportSummaryType';
  category?: Maybe<Scalars['String']['output']>;
  mostOrderedProduct?: Maybe<Scalars['String']['output']>;
  totalOrders?: Maybe<Scalars['Int']['output']>;
  totalProducts?: Maybe<Scalars['Float']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
};

export type OrderReportInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type OrderReportPayload = {
  __typename?: 'OrderReportPayload';
  response?: Maybe<Response>;
  totalTaxAmount?: Maybe<Scalars['Float']['output']>;
  totalTaxableAmount?: Maybe<Scalars['Float']['output']>;
};

export type OrderShipping = {
  __typename?: 'OrderShipping';
  applyInsurance?: Maybe<Scalars['Boolean']['output']>;
  applyPackageType?: Maybe<Scalars['Boolean']['output']>;
  cancellationReason?: Maybe<Scalars['String']['output']>;
  carrier?: Maybe<Scalars['String']['output']>;
  confirmationType?: Maybe<ConfirmationType>;
  createdAt: Scalars['String']['output'];
  dimensionUnit?: Maybe<DimensionType>;
  dropShipping?: Maybe<Scalars['Boolean']['output']>;
  fromAddress?: Maybe<Address>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  insurance?: Maybe<InsuranceProvider>;
  labelStatus?: Maybe<Scalars['Boolean']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  orderId: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  packageType?: Maybe<PackagingType>;
  returnLabel?: Maybe<Scalars['Boolean']['output']>;
  serviceType?: Maybe<Scalars['String']['output']>;
  shipmentCost?: Maybe<Scalars['Float']['output']>;
  shippingDate?: Maybe<Scalars['String']['output']>;
  shippingInstructions?: Maybe<Scalars['String']['output']>;
  shippingLabel?: Maybe<Scalars['String']['output']>;
  shippingNo?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  weightUnit?: Maybe<WeightType>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type OrderShippingAddress = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  taxableReason?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Order Status */
export enum OrderStatus {
  Completed = 'COMPLETED',
  Delivered = 'DELIVERED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  ReadyToDeliver = 'READY_TO_DELIVER',
  Shipped = 'SHIPPED',
  Void = 'VOID'
}

export type OrderTax = {
  __typename?: 'OrderTax';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order: Order;
  orderId: Scalars['String']['output'];
  percentage?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type OrderTaxPayload = {
  __typename?: 'OrderTaxPayload';
  orderTax?: Maybe<OrderTax>;
  response?: Maybe<Response>;
};

/** Order Type */
export enum OrderType {
  Pickup = 'PICKUP',
  Shipping = 'SHIPPING'
}

export type OrdersPayload = {
  __typename?: 'OrdersPayload';
  orders?: Maybe<Array<Order>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type OrgInput = {
  cancellationLimit: Scalars['Int']['input'];
  closingTime?: InputMaybe<Scalars['String']['input']>;
  creatorId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  noOfUsers: Scalars['Int']['input'];
  openingTime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrganizationStatus>;
};

export type OrgPayload = {
  __typename?: 'OrgPayload';
  organization?: Maybe<Organization>;
  response?: Maybe<Response>;
};

export type OrgSetting = {
  __typename?: 'OrgSetting';
  clientKey?: Maybe<Scalars['String']['output']>;
  stripeApiKey?: Maybe<Scalars['String']['output']>;
  type: PaymentProcessors;
};

export type OrgSettingPayload = {
  __typename?: 'OrgSettingPayload';
  response?: Maybe<Response>;
  setting?: Maybe<OrgSetting>;
};

export type OrgSubscription = {
  __typename?: 'OrgSubscription';
  createdAt: Scalars['String']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<Array<Payment>>;
  startDate?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SubscriptionStatus>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
  subscriptionPlanId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type OrgSubscriptionPayload = {
  __typename?: 'OrgSubscriptionPayload';
  orgSubscription?: Maybe<OrgSubscription>;
  response?: Maybe<Response>;
};

export type OrgSubscriptionsPayload = {
  __typename?: 'OrgSubscriptionsPayload';
  orgSubscriptions?: Maybe<Array<Maybe<OrgSubscription>>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Address>;
  adminUser?: Maybe<User>;
  cancellationLimit?: Maybe<Scalars['Int']['output']>;
  closingTime?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  customersCount?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  noOfUsers: Scalars['Int']['output'];
  openingTime?: Maybe<Scalars['String']['output']>;
  orgSubscription?: Maybe<Array<OrgSubscription>>;
  staffCount?: Maybe<Scalars['Int']['output']>;
  status: OrganizationStatus;
  updatedAt: Scalars['String']['output'];
};

export enum OrganizationStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Invited = 'INVITED'
}

export type OrgsPayload = {
  __typename?: 'OrgsPayload';
  organizations?: Maybe<Array<Maybe<Organization>>>;
  pagination: PaginationPayload;
  response?: Maybe<Response>;
};

export enum PackagingType {
  CanadaPostEnvelope = 'CANADA_POST_ENVELOPE',
  CanadaPostPak = 'CANADA_POST_PAK',
  ExpressEnvelope = 'EXPRESS_ENVELOPE',
  Fedex_10KgBox = 'FEDEX_10KG_BOX',
  Fedex_25KgBox = 'FEDEX_25KG_BOX',
  FedexEnvelope = 'FEDEX_ENVELOPE',
  FedexOneRateEnvelope = 'FEDEX_ONE_RATE_ENVELOPE',
  FedexOneRateExtraLargeBox = 'FEDEX_ONE_RATE_EXTRA_LARGE_BOX',
  FedexOneRateLargeBox = 'FEDEX_ONE_RATE_LARGE_BOX',
  FedexOneRateMediumBox = 'FEDEX_ONE_RATE_MEDIUM_BOX',
  FedexOneRatePak = 'FEDEX_ONE_RATE_PAK',
  FedexOneRateSmallBox = 'FEDEX_ONE_RATE_SMALL_BOX',
  FedexOneRateTube = 'FEDEX_ONE_RATE_TUBE',
  FedexPak = 'FEDEX_PAK',
  FedexTube = 'FEDEX_TUBE',
  LargeEnvelope = 'LARGE_ENVELOPE',
  Letter = 'LETTER',
  Package = 'PACKAGE',
  Postcard = 'POSTCARD',
  Ups_10KgBox = 'UPS_10KG_BOX',
  Ups_25KgBox = 'UPS_25KG_BOX',
  UpsExpressBoxLarge = 'UPS_EXPRESS_BOX_LARGE',
  UpsExpressBoxMedium = 'UPS_EXPRESS_BOX_MEDIUM',
  UpsExpressBoxSmall = 'UPS_EXPRESS_BOX_SMALL',
  UpsLetter = 'UPS_LETTER',
  UpsPak = 'UPS_PAK',
  UpsTube = 'UPS_TUBE',
  UspsFlatRateEnvelope = 'USPS_FLAT_RATE_ENVELOPE',
  UspsLargeFlatRateBox = 'USPS_LARGE_FLAT_RATE_BOX',
  UspsLegalFlatRateEnvelope = 'USPS_LEGAL_FLAT_RATE_ENVELOPE',
  UspsMediumFlatRateBox = 'USPS_MEDIUM_FLAT_RATE_BOX',
  UspsPaddedFlatRateEnvelope = 'USPS_PADDED_FLAT_RATE_ENVELOPE',
  UspsRegionalRateBoxA = 'USPS_REGIONAL_RATE_BOX_A',
  UspsRegionalRateBoxB = 'USPS_REGIONAL_RATE_BOX_B',
  UspsSmallFlatRateBox = 'USPS_SMALL_FLAT_RATE_BOX'
}

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type PaginationPayload = {
  __typename?: 'PaginationPayload';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ParcelGuardAgreementResponse = {
  __typename?: 'ParcelGuardAgreementResponse';
  agreementAgree: Scalars['Boolean']['output'];
  response?: Maybe<Response>;
};

export type ParcelGuardInsuranceResponse = {
  __typename?: 'ParcelGuardInsuranceResponse';
  response?: Maybe<Response>;
  url: Scalars['String']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']['output']>;
  chargedAttemptAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  invoiceNo?: Maybe<Scalars['String']['output']>;
  nextPayment?: Maybe<Scalars['String']['output']>;
  orgSubscription?: Maybe<OrgSubscription>;
  orgSubscriptionId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<PaymentStatus>;
  pdfUrl?: Maybe<Scalars['String']['output']>;
  stripePaymentId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type PaymentPayload = {
  __typename?: 'PaymentPayload';
  payment?: Maybe<Payment>;
  response?: Maybe<Response>;
};

export enum PaymentProcessors {
  Authorize = 'AUTHORIZE',
  Bridgepay = 'BRIDGEPAY',
  Stripe = 'STRIPE'
}

export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  /**  stripe or authorize fess */
  fee?: Maybe<Scalars['Float']['output']>;
  grandInvoice?: Maybe<GrandInvoice>;
  grandInvoiceId?: Maybe<Scalars['String']['output']>;
  grandInvoicePayment?: Maybe<GrandInvoicePayment>;
  grandInvoicePaymentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  orderPayment?: Maybe<OrderPayment>;
  orderPaymentId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentProcessor?: Maybe<PaymentProcessors>;
  paymentType?: Maybe<PaymentTypes>;
  reason?: Maybe<Scalars['String']['output']>;
  receivedAt?: Maybe<Scalars['String']['output']>;
  /**  stripe or authorize refund id */
  refundId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<PaymentRefundStatus>;
  type?: Maybe<RefundType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PaymentRefundPayload = {
  __typename?: 'PaymentRefundPayload';
  refundData: PaymentRefund;
  response?: Maybe<Response>;
};

export enum PaymentRefundStatus {
  Failed = 'FAILED',
  PartiallyRefund = 'PARTIALLY_REFUND',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
  Succeeded = 'SUCCEEDED'
}

export type PaymentRefundsPayload = {
  __typename?: 'PaymentRefundsPayload';
  pagination: PaginationPayload;
  paymentRefunds?: Maybe<Array<PaymentRefund>>;
  response?: Maybe<Response>;
};

/** organization subscription plan payment status */
export enum PaymentStatus {
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Open = 'OPEN',
  Paid = 'PAID',
  UnCollectible = 'UN_COLLECTIBLE',
  Void = 'VOID'
}

export type PaymentType = {
  __typename?: 'PaymentType';
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<PaymentTypeStatus>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type PaymentTypePayload = {
  __typename?: 'PaymentTypePayload';
  paymentType?: Maybe<PaymentType>;
  response?: Maybe<Response>;
};

export enum PaymentTypeStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum PaymentTypes {
  Ach = 'ACH',
  Card = 'CARD'
}

export type PaymentTypesPayload = {
  __typename?: 'PaymentTypesPayload';
  pagination: PaginationPayload;
  paymentTypes?: Maybe<Array<PaymentType>>;
  response?: Maybe<Response>;
};

export type PaymentsPayload = {
  __typename?: 'PaymentsPayload';
  pagination: PaginationPayload;
  payments?: Maybe<Array<Maybe<Payment>>>;
  response?: Maybe<Response>;
};

export type PricingLevel = {
  __typename?: 'PricingLevel';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<PricingLevelEnum>;
  organizationId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export enum PricingLevelEnum {
  Level_1 = 'LEVEL_1',
  Level_2 = 'LEVEL_2',
  Level_3 = 'LEVEL_3',
  Level_4 = 'LEVEL_4',
  Level_5 = 'LEVEL_5',
  Level_6 = 'LEVEL_6',
  Level_7 = 'LEVEL_7',
  Level_8 = 'LEVEL_8',
  Level_9 = 'LEVEL_9',
  Level_10 = 'LEVEL_10'
}

export type PricingLevelPayload = {
  __typename?: 'PricingLevelPayload';
  pricingLevel?: Maybe<PricingLevel>;
  response?: Maybe<Response>;
};

export enum PricingLevelSortBy {
  CreatedAt = 'CREATED_AT',
  Label = 'LABEL',
  Name = 'NAME'
}

export type PricingLevelsPayload = {
  __typename?: 'PricingLevelsPayload';
  pagination: PaginationPayload;
  pricingLevels?: Maybe<Array<PricingLevel>>;
  response?: Maybe<Response>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discountable?: Maybe<Scalars['Boolean']['output']>;
  externalItemCode?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  minPricing?: Maybe<ProductPricing>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  productAddons?: Maybe<Array<ProductAddon>>;
  productAddonsCount?: Maybe<Scalars['Int']['output']>;
  productPricing?: Maybe<Array<ProductPricing>>;
  productSteps?: Maybe<Array<ProductSteps>>;
  shortCode?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ProductStatus>;
  subCategory?: Maybe<SubCategory>;
  subCategoryId?: Maybe<Scalars['String']['output']>;
  taxable?: Maybe<Scalars['Boolean']['output']>;
  thumbnail?: Maybe<Attachment>;
  updatedAt: Scalars['String']['output'];
};

export type ProductActivitySummaryPayload = {
  __typename?: 'ProductActivitySummaryPayload';
  response?: Maybe<Response>;
  totalProducts: Scalars['Float']['output'];
  totalRevenue: Scalars['Float']['output'];
};

export type ProductAddon = {
  __typename?: 'ProductAddon';
  addonAnswers?: Maybe<Array<AddonAnswer>>;
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  shortCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type ProductAddonPayload = {
  __typename?: 'ProductAddonPayload';
  productAddon?: Maybe<ProductAddon>;
  response?: Maybe<Response>;
};

export type ProductAnalyticsPayload = {
  __typename?: 'ProductAnalyticsPayload';
  bestSellingProducts: Array<ProductAnalyticsType>;
  leastSellingProducts: Array<ProductAnalyticsType>;
  response?: Maybe<Response>;
};

export type ProductAnalyticsType = {
  __typename?: 'ProductAnalyticsType';
  maxPrice: Scalars['Float']['output'];
  minPrice: Scalars['Float']['output'];
  product?: Maybe<Product>;
  productName: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  revenue: Scalars['Float']['output'];
};

export type ProductBulkStepsPayload = {
  __typename?: 'ProductBulkStepsPayload';
  productSteps?: Maybe<Array<ProductSteps>>;
  response?: Maybe<Response>;
};

export type ProductInput = {
  categoryId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  discountable: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  shortCode?: InputMaybe<Scalars['String']['input']>;
  status: ProductStatus;
  subCategoryId?: InputMaybe<Scalars['String']['input']>;
  taxable: Scalars['Boolean']['input'];
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  product?: Maybe<Product>;
  response?: Maybe<Response>;
};

export type ProductPricing = {
  __typename?: 'ProductPricing';
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  l1?: Maybe<Scalars['Float']['output']>;
  l2?: Maybe<Scalars['Float']['output']>;
  l3?: Maybe<Scalars['Float']['output']>;
  l4?: Maybe<Scalars['Float']['output']>;
  l5?: Maybe<Scalars['Float']['output']>;
  l6?: Maybe<Scalars['Float']['output']>;
  l7?: Maybe<Scalars['Float']['output']>;
  l8?: Maybe<Scalars['Float']['output']>;
  l9?: Maybe<Scalars['Float']['output']>;
  l10?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type ProductPricingPayload = {
  __typename?: 'ProductPricingPayload';
  productPricing?: Maybe<ProductPricing>;
  response?: Maybe<Response>;
};

/** Product sort by */
export enum ProductSortBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Recent = 'RECENT'
}

export enum ProductStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ProductStepPayload = {
  __typename?: 'ProductStepPayload';
  productStep?: Maybe<ProductSteps>;
  response?: Maybe<Response>;
};

export type ProductSteps = {
  __typename?: 'ProductSteps';
  createdAt?: Maybe<Scalars['String']['output']>;
  days?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  minutes?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  step?: Maybe<Task>;
  stepId?: Maybe<Scalars['String']['output']>;
  turnAroundDuration?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ProductsPayload = {
  __typename?: 'ProductsPayload';
  pagination: PaginationPayload;
  products?: Maybe<Array<Product>>;
  response?: Maybe<Response>;
};

export type Query = {
  __typename?: 'Query';
  calculateProductStepsTime: CalculateProductStepPayload;
  checkDiscountCode: DiscountCodePayload;
  checkStampParcelGuardAgreement: ParcelGuardAgreementResponse;
  fetchCards: StripeCardsPayload;
  fetchEmployee: UserPayload;
  fetchStaff: UserPayload;
  fetchUser: UserPayload;
  findAllCategories: CategoriesPayload;
  findAllCountries: CountriesPayload;
  findAllCustomerAccounts: CustomerAccountsPayload;
  findAllCustomerCards: CustomerCardsPayload;
  findAllCustomers: CustomersPayload;
  findAllDepartments: DepartmentsPayload;
  findAllDiscountCodes: DiscountCodesPayload;
  findAllEmailTemplates: EmailTemplateListPayload;
  findAllEmployees: UsersPayload;
  findAllGrandInvoices: GrandInvoicesPayload;
  findAllOrderCancelRequest: FindAllOrderCancelRequestsPayload;
  findAllOrderPayments: OrderPaymentsPayload;
  findAllOrders: OrdersPayload;
  findAllOrgSubscriptions: OrgSubscriptionsPayload;
  findAllOrgs: OrgsPayload;
  findAllPaymentRefund: PaymentRefundsPayload;
  findAllPaymentTypes: PaymentTypesPayload;
  findAllPayments: PaymentsPayload;
  findAllPricingLevels: PricingLevelsPayload;
  findAllProductAddons: FindAllProductAddonsPayload;
  findAllProductAnalytics: FindAllProductAnalyticsPayload;
  findAllProducts: ProductsPayload;
  findAllShippingServices: ShippingServicesPayload;
  findAllSmsTemplates: SmsTemplatesPayload;
  findAllStates: StatesPayload;
  findAllStripeProducts: StripeProductsPayload;
  findAllSubCategories: SubCategoriesPayload;
  findAllSubDepartments: SubDepartmentsPayload;
  findAllSubscriptionPlans: SubscriptionPlansPayload;
  findAllSystemAddons: FindAllSystemAddonsPayload;
  findAllTasks: TasksPayload;
  findAllTaxes: TaxesPayload;
  findAllUsers: UsersPayload;
  findCarrierServices: CarrierServicesPayload;
  findCarriers: StampsCarrierPayload;
  findOneByAddressableId: AddressPayload;
  findPaymentsByGrandInvoice: GrandInvoicePaymentsPayload;
  getActiveSettings: SettingsPayload;
  getAddress: AddressPayload;
  getAdminDashboard: AdminDashboardPayload;
  getAllOrderPaymentsByGrandInvoice: OrderPaymentsByGrandInvoicePayload;
  getApplicationFess: GetApplicationFeePayload;
  getAttachment: AttachmentPayload;
  getAttachmentByType: AttachmentPayload;
  getBalance: StampsBalanceResponsePayload;
  getCategory: CategoryPayload;
  getClosingReport: ClosingReportPayload;
  getContact: ContactPayload;
  getCurrentVsLastMonthSalesComparison: MonthlySalesComparisonPayload;
  getCustomer: CustomerPayload;
  getCustomerActivitySummary: CustomerActivitySummaryPayload;
  getCustomerByUserId: CustomerPayload;
  getCustomerCard: CustomerCardPayload;
  getCustomerDashboard: CustomerDashboardPayload;
  getCustomerDocument: CustomerDocumentPayload;
  getCustomerSetupIntent: StripeSetupIntentPayload;
  getDepartment: DepartmentPayload;
  getDiscountCode: DiscountCodePayload;
  getEmailTemplate: EmailTemplatePayload;
  getGrandInvoice: GrandInvoicePayload;
  getGrandInvoiceByToken: GrandInvoicePayload;
  getManagerDashboard: StaffDashboardPayload;
  getOneSubCategory: SubCategoryPayload;
  getOrder: OrderPayload;
  getOrderCancelRequest: GetOrderCancelRequestPayLoad;
  getOrderPayment: OrderPaymentPayload;
  getOrderTax: OrderTaxPayload;
  getOrdersProductsReport: OrderProductsReportPayload;
  getOrdersProductsSummary: OrderProductsReportSummary;
  getOrg: OrgPayload;
  getOrgActiveSetting: OrgSettingPayload;
  getOrgApiKey: GetApiKeyPayload;
  getOrgSubscription: OrgSubscriptionPayload;
  getPayment: PaymentPayload;
  getPaymentType: PaymentTypePayload;
  getPricingLevel: PricingLevelPayload;
  getProduct: ProductPayload;
  getProductActivitySummary: ProductActivitySummaryPayload;
  getProductAddon: ProductAddonPayload;
  getProductAnalytics: ProductAnalyticsPayload;
  getProductPricing: ProductPricingPayload;
  getProductStep: ProductStepPayload;
  getRefundByOrderPaymentId: OrderPaymentRefundPayload;
  getSalesReportSummary: SalesReportSummaryPayload;
  getSalesTaxReport: SalesReportPayload;
  getSamplePrint: LabelPayload;
  getSettingByOrgId: SettingsPayload;
  getSettings: SettingsPayload;
  getShareMeCredentials: ShareMeChatPayload;
  getShippingLabel: LabelPayload;
  getShippingService: ShippingServicePayload;
  getSmsTemplate: SmsTemplatePayload;
  getStaffDashboard: StaffDashboardPayload;
  getStampsCredentials: StampsCredentialsPayload;
  getStampsParcelGuardAgreement: ParcelGuardInsuranceResponse;
  getSubDepartment: SubDepartmentPayload;
  getSubscriptionPlan: SubscriptionPlanPayload;
  getSuperAdminChart: SuperAdminChartPayload;
  getSuperAdminDashboard: SuperAdminDashboardPayload;
  getSystemAddon: SystemAddonPayload;
  getTask: TaskPayload;
  getTax: TaxPayload;
  getTaxByOrgId: TaxPayload;
  getTemplateVariables: TemplateVariableListPayload;
  getYearlySalesDataByProductsSold: YearlySalesDataPayload;
  getYearlySalesDataByRevenue: YearlySalesDataPayload;
  orderReport: OrderReportPayload;
  shippingTracking: ShippingTrackingPayload;
  validateAddress: AddressValidationPayload;
};


export type QueryCalculateProductStepsTimeArgs = {
  calculateProductStepsTimeInput: CalculateProductStepsTimeInput;
};


export type QueryCheckDiscountCodeArgs = {
  checkDiscountCodeInput: CheckDiscountCodeInput;
};


export type QueryFetchEmployeeArgs = {
  fetchEmployeeInput: FetchEmployeeInput;
};


export type QueryFindAllCategoriesArgs = {
  findAllCategoriesInput: FindAllCategoriesInput;
};


export type QueryFindAllCountriesArgs = {
  findAllCountriesInput: FindAllCountriesInput;
};


export type QueryFindAllCustomerAccountsArgs = {
  findAllCustomerAccountsInput: FindAllCustomerAccountsInput;
};


export type QueryFindAllCustomerCardsArgs = {
  findAllCustomerCardsInput: FindAllCustomerCardsInput;
};


export type QueryFindAllCustomersArgs = {
  findAllCustomersInput: FindAllCustomersInput;
};


export type QueryFindAllDepartmentsArgs = {
  findAllDepartmentsInput: FindAllDepartmentsInput;
};


export type QueryFindAllDiscountCodesArgs = {
  findAllDiscountCodesInput: FindAllDiscountCodesInput;
};


export type QueryFindAllEmployeesArgs = {
  findAllEmployeeInput: FindAllEmployeeInput;
};


export type QueryFindAllGrandInvoicesArgs = {
  findAllGrandInvoicesInput: FindAllGrandInvoicesInput;
};


export type QueryFindAllOrderCancelRequestArgs = {
  findAllOrderCancelRequestInput: FindAllOrderCancelRequestInput;
};


export type QueryFindAllOrderPaymentsArgs = {
  findAllOrderPaymentsInput: FindAllOrderPaymentsInput;
};


export type QueryFindAllOrdersArgs = {
  findAllOrdersInput: FindAllOrdersInput;
};


export type QueryFindAllOrgSubscriptionsArgs = {
  findAllOrgSubscriptionsInput: FindAllOrgSubscriptionsInput;
};


export type QueryFindAllOrgsArgs = {
  findAllOrgsInput: FindAllOrgsInput;
};


export type QueryFindAllPaymentRefundArgs = {
  findAllPaymentRefundInput: FindAllPaymentRefundsInput;
};


export type QueryFindAllPaymentTypesArgs = {
  findAllPaymentTypesInput: FindAllPaymentTypesInput;
};


export type QueryFindAllPaymentsArgs = {
  findAllPaymentsInput: FindAllPaymentsInput;
};


export type QueryFindAllPricingLevelsArgs = {
  findAllPricingLevelsInput: FindAllPricingLevelsInput;
};


export type QueryFindAllProductAddonsArgs = {
  findAllProductAddonsInput: FindAllProductAddonsInput;
};


export type QueryFindAllProductAnalyticsArgs = {
  findAllProductAnalyticsInput: GetProductAnalyticsInput;
};


export type QueryFindAllProductsArgs = {
  findAllProductsInput: FindAllProductsInput;
};


export type QueryFindAllShippingServicesArgs = {
  findAllShippingServicesInput: FindAllShippingServicesInput;
};


export type QueryFindAllStatesArgs = {
  findAllStatesInput: FindAllStatesInput;
};


export type QueryFindAllStripeProductsArgs = {
  findAllStripeProductsInput: FindAllStripeProductsInput;
};


export type QueryFindAllSubCategoriesArgs = {
  findAllSubCategoriesInput: FindAllSubCategoriesInput;
};


export type QueryFindAllSubDepartmentsArgs = {
  findAllSubDepartmentsInput: FindAllSubDepartmentsInput;
};


export type QueryFindAllSubscriptionPlansArgs = {
  findAllSubscriptionPlansInput: FindAllSubscriptionPlansInput;
};


export type QueryFindAllSystemAddonsArgs = {
  findAllSystemAddonsInput: FindAllSystemAddonsInput;
};


export type QueryFindAllTasksArgs = {
  findAllTasksInput: FindAllTasksInput;
};


export type QueryFindAllTaxesArgs = {
  findAllTaxesInput: FindAllTaxesInput;
};


export type QueryFindAllUsersArgs = {
  findAllUsersInput: FindAllUsersInput;
};


export type QueryFindCarrierServicesArgs = {
  carrierServicesInput: CarrierServicesInput;
};


export type QueryFindOneByAddressableIdArgs = {
  findOneByAddressableIdInput: FindOneByAddressableIdInput;
};


export type QueryFindPaymentsByGrandInvoiceArgs = {
  findPaymentsByGrandInvoiceIdInput: FindPaymentsByGrandInvoiceIdInput;
};


export type QueryGetAddressArgs = {
  getAddressInput: GetAddressInput;
};


export type QueryGetAllOrderPaymentsByGrandInvoiceArgs = {
  getAllOrderPaymentsByGrandInvoiceInput: GetAllOrderPaymentsByGrandInvoiceInput;
};


export type QueryGetApplicationFessArgs = {
  paymentId: Scalars['String']['input'];
};


export type QueryGetAttachmentArgs = {
  getAttachmentInput: GetAttachmentInput;
};


export type QueryGetAttachmentByTypeArgs = {
  getAttachmentByTypeInput: GetAttachmentByTypeInput;
};


export type QueryGetCategoryArgs = {
  getCategoryInput: GetCategoryInput;
};


export type QueryGetClosingReportArgs = {
  closingReportInput: ClosingReportInput;
};


export type QueryGetContactArgs = {
  getContactInput: GetContactInput;
};


export type QueryGetCustomerArgs = {
  getCustomerInput: GetCustomerInput;
};


export type QueryGetCustomerActivitySummaryArgs = {
  getCustomerActivitySummaryInput: GetCustomerActivitySummaryInput;
};


export type QueryGetCustomerCardArgs = {
  getCustomerCardInput: GetCustomerCardInput;
};


export type QueryGetCustomerDocumentArgs = {
  getCustomerDocumentInput: GetCustomerDocumentInput;
};


export type QueryGetCustomerSetupIntentArgs = {
  getCustomerSetupIntentInput: GetCustomerSetupIntentInput;
};


export type QueryGetDepartmentArgs = {
  getDepartmentInput: GetDepartmentInput;
};


export type QueryGetDiscountCodeArgs = {
  getDiscountCodeInput: GetDiscountCodeInput;
};


export type QueryGetEmailTemplateArgs = {
  orderStatus: GetEmailTemplateInput;
};


export type QueryGetGrandInvoiceArgs = {
  getGrandInvoiceInput: GetGrandInvoiceInput;
};


export type QueryGetGrandInvoiceByTokenArgs = {
  getGrandInvoiceByTokenInput: GetGrandInvoiceByTokenInput;
};


export type QueryGetOneSubCategoryArgs = {
  getSubCategoryInput: GetSubCategoryInput;
};


export type QueryGetOrderArgs = {
  getOrderInput: GetOrderInput;
};


export type QueryGetOrderCancelRequestArgs = {
  getOrderCancelRequestInput: GetOrderCancelRequestInput;
};


export type QueryGetOrderPaymentArgs = {
  getOrderPaymentInput: GetOrderPaymentInput;
};


export type QueryGetOrderTaxArgs = {
  getOrderTaxByOrderId: GetOrderTaxById;
};


export type QueryGetOrdersProductsReportArgs = {
  orderProductsReportInput: OrderProductsReportInput;
};


export type QueryGetOrdersProductsSummaryArgs = {
  orderProductsReportInput: OrderProductsReportInput;
};


export type QueryGetOrgArgs = {
  getOrgInput: GetOrgInput;
};


export type QueryGetOrgActiveSettingArgs = {
  getOrgActiveSettingInput: GetOrgActiveSettingInput;
};


export type QueryGetOrgSubscriptionArgs = {
  getOrgSubscriptionInput: GetOrgSubscriptionInput;
};


export type QueryGetPaymentArgs = {
  getPaymentInput: GetPaymentInput;
};


export type QueryGetPaymentTypeArgs = {
  getPaymentTypeInput: GetPaymentTypeInput;
};


export type QueryGetPricingLevelArgs = {
  getPricingLevelInput: GetPricingLevelInput;
};


export type QueryGetProductArgs = {
  getProductInput: GetProductInput;
};


export type QueryGetProductActivitySummaryArgs = {
  getProductActivitySummaryInput: GetProductActivitySummaryInput;
};


export type QueryGetProductAddonArgs = {
  getProductAddonInput: GetProductAddonInput;
};


export type QueryGetProductAnalyticsArgs = {
  getProductAnalyticsInput: GetProductAnalyticsInput;
};


export type QueryGetProductPricingArgs = {
  getProductPricingInput: GetProductPricingInput;
};


export type QueryGetProductStepArgs = {
  getProductStepInput: GetProductStepInput;
};


export type QueryGetRefundByOrderPaymentIdArgs = {
  getRefundsByOrderPaymentIdInput: GetRefundsByOrderPaymentIdInput;
};


export type QueryGetSalesReportSummaryArgs = {
  getSalesReportSummaryInput: GetSalesReportSummaryInput;
};


export type QueryGetSalesTaxReportArgs = {
  salesTaxReportInput: SalesTaxReportInput;
};


export type QueryGetSettingByOrgIdArgs = {
  getSettingByOrgIdInput: GetSettingByOrgIdInput;
};


export type QueryGetSettingsArgs = {
  getSettingsInput: GetSettingsInput;
};


export type QueryGetShippingLabelArgs = {
  shippingLabelInput: ShippingLabelInput;
};


export type QueryGetShippingServiceArgs = {
  getShippingServiceInput: GetShippingServiceInput;
};


export type QueryGetSmsTemplateArgs = {
  findByTypeInput: FindByTypeInput;
};


export type QueryGetSubDepartmentArgs = {
  getSubDepartmentInput: GetSubDepartmentInput;
};


export type QueryGetSubscriptionPlanArgs = {
  getSubscriptionPlanInput: GetSubscriptionPlanInput;
};


export type QueryGetSystemAddonArgs = {
  getSystemAddonInput: GetSystemAddonInput;
};


export type QueryGetTaskArgs = {
  getTaskInput: GetTaskInput;
};


export type QueryGetTaxArgs = {
  getTaxInput: GetTaxInput;
};


export type QueryGetYearlySalesDataByProductsSoldArgs = {
  getYearlySalesDataInput: GetYearlySalesDataInput;
};


export type QueryGetYearlySalesDataByRevenueArgs = {
  getYearlySalesDataInput: GetYearlySalesDataInput;
};


export type QueryOrderReportArgs = {
  orderReportInput: OrderReportInput;
};


export type QueryShippingTrackingArgs = {
  shippingTrackingInput: ShippingTrackingInput;
};


export type QueryValidateAddressArgs = {
  shippingAddressType: ShippingAddressType;
};

export enum RefundType {
  GrandInvoiceRefund = 'GRAND_INVOICE_REFUND',
  OrderRefund = 'ORDER_REFUND'
}

export type RemoveAttachmentInput = {
  id: Scalars['String']['input'];
};

export type RemoveCategoryInput = {
  id: Scalars['String']['input'];
};

export type RemoveCustomerAccountInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type RemoveCustomerCardInput = {
  id: Scalars['String']['input'];
};

export type RemoveDepartmentInput = {
  id: Scalars['String']['input'];
};

export type RemovePaymentTypeInput = {
  id: Scalars['String']['input'];
};

export type RemoveProductStepInput = {
  id: Scalars['String']['input'];
};

export type RemoveShippingServiceInput = {
  id: Scalars['String']['input'];
};

export type RemoveStaffDepartmentsInput = {
  departments: Array<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
};

export type RemoveStripeCardInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
};

export type RemoveSubDepartmentInput = {
  id: Scalars['String']['input'];
};

export type RemoveSubscriptionPlanInput = {
  id: Scalars['String']['input'];
};

export type RemoveSystemAddonInput = {
  id: Scalars['String']['input'];
};

export type RemoveTaxInput = {
  id: Scalars['String']['input'];
};

/** Request Status */
export enum RequestStatus {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type ResendVerificationEmailInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type Response = {
  __typename?: 'Response';
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type ResponsePayload = {
  __typename?: 'ResponsePayload';
  response?: Maybe<Response>;
};

export type RevenueType = {
  __typename?: 'RevenueType';
  month: Scalars['String']['output'];
  revenue: Scalars['Float']['output'];
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserRoles>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SalesReportPayload = {
  __typename?: 'SalesReportPayload';
  exemptTaxReport: SalesReportType;
  grandReport: SalesReportType;
  grandSalesTaxReport?: Maybe<SalesReportType>;
  response?: Maybe<Response>;
  salesTaxReport?: Maybe<Array<SalesReportType>>;
};

export type SalesReportSummaryPayload = {
  __typename?: 'SalesReportSummaryPayload';
  response?: Maybe<Response>;
  totalOrders: Scalars['Int']['output'];
  totalSales: Scalars['Float']['output'];
};

export type SalesReportType = {
  __typename?: 'SalesReportType';
  count: Scalars['Int']['output'];
  percentage: Scalars['Float']['output'];
  totalNonTaxableAmount: Scalars['Float']['output'];
  totalSalesBeforeTax: Scalars['Float']['output'];
  totalTaxAmount: Scalars['Float']['output'];
  totalTaxableAmount: Scalars['Float']['output'];
};

export type SalesTaxReportInput = {
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type SetDefaultCardInput = {
  defaultPaymentId: Scalars['String']['input'];
};

export type Settings = {
  __typename?: 'Settings';
  clientKey?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  creatorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
  stripeApiKey?: Maybe<Scalars['String']['output']>;
  type: PaymentProcessors;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SettingsPayload = {
  __typename?: 'SettingsPayload';
  credentialsExists?: Maybe<Scalars['Boolean']['output']>;
  response?: Maybe<Response>;
  settings?: Maybe<Settings>;
};

export type ShareMeChatPayload = {
  __typename?: 'ShareMeChatPayload';
  response?: Maybe<Response>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type ShareMeCredentialsInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type ShipmentCost = {
  __typename?: 'ShipmentCost';
  currency: Scalars['String']['output'];
  total_amount: Scalars['Float']['output'];
};

export type ShipmentCostType = {
  __typename?: 'ShipmentCostType';
  cost_details?: Maybe<Array<CostDetails>>;
  currency: Scalars['String']['output'];
  total_amount: Scalars['Float']['output'];
};

export type ShippingAddress = {
  __typename?: 'ShippingAddress';
  address_line1: Scalars['String']['output'];
  address_line2?: Maybe<Scalars['String']['output']>;
  address_line3?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  company_name?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code: Scalars['String']['output'];
  residential_indicator?: Maybe<Scalars['String']['output']>;
  stateId?: Maybe<Scalars['String']['output']>;
  state_province?: Maybe<Scalars['String']['output']>;
};

export type ShippingAddressType = {
  address_line1: Scalars['String']['input'];
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_line3?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  company_name?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  country_code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code: Scalars['String']['input'];
  residential_indicator?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  state_province?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingLabel = {
  __typename?: 'ShippingLabel';
  label_id: Scalars['String']['output'];
  labels: Array<LabelHref>;
  shipment_cost: ShipmentCost;
  tracking_number: Scalars['String']['output'];
};

export type ShippingLabelInput = {
  orderId: Scalars['String']['input'];
};

export type ShippingLabelPayload = {
  __typename?: 'ShippingLabelPayload';
  response?: Maybe<Response>;
  shippingLabel?: Maybe<ShippingLabel>;
};

export type ShippingRatesInput = {
  advanced_options?: InputMaybe<AdvancedOptions>;
  delivery_confirmation_type?: InputMaybe<ConfirmationType>;
  fromAddress?: InputMaybe<ShippingAddressType>;
  insurance?: InputMaybe<InsuranceInput>;
  is_return_label?: InputMaybe<Scalars['Boolean']['input']>;
  package_type?: InputMaybe<PackageType>;
  service_type?: InputMaybe<Scalars['String']['input']>;
  ship_date?: InputMaybe<Scalars['String']['input']>;
  toAddress: ShippingAddressType;
};

export type ShippingService = {
  __typename?: 'ShippingService';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status: ShippingServiceStatus;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ShippingServicePayload = {
  __typename?: 'ShippingServicePayload';
  response?: Maybe<Response>;
  shippingService?: Maybe<ShippingService>;
};

export enum ShippingServiceStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ShippingServicesPayload = {
  __typename?: 'ShippingServicesPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  shippingServices?: Maybe<Array<ShippingService>>;
};

export type ShippingTracking = {
  __typename?: 'ShippingTracking';
  carrier_name?: Maybe<Scalars['String']['output']>;
  carrier_status_description?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<TrackingDestination>;
  estimated_delivery_date?: Maybe<Scalars['String']['output']>;
  status_code?: Maybe<Scalars['String']['output']>;
  tracking_events?: Maybe<Array<TrackingEvent>>;
  tracking_number?: Maybe<Scalars['String']['output']>;
};

export type ShippingTrackingInput = {
  trackingNumber: Scalars['String']['input'];
};

export type ShippingTrackingPayload = {
  __typename?: 'ShippingTrackingPayload';
  response?: Maybe<Response>;
  tracking?: Maybe<ShippingTracking>;
};

export type SmsTemplate = {
  __typename?: 'SmsTemplate';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  type: MessageType;
  updatedAt: Scalars['String']['output'];
};

export type SmsTemplatePayload = {
  __typename?: 'SmsTemplatePayload';
  response?: Maybe<Response>;
  smsTemplate?: Maybe<SmsTemplate>;
};

export type SmsTemplatesPayload = {
  __typename?: 'SmsTemplatesPayload';
  response?: Maybe<Response>;
  smsTemplates?: Maybe<Array<SmsTemplate>>;
};

export enum SortBy {
  CreatedAt = 'CREATED_AT',
  Priority = 'PRIORITY'
}

export enum SpecialContentsType {
  CrematedRemains = 'CREMATED_REMAINS',
  HazardousMaterials = 'HAZARDOUS_MATERIALS',
  LiveAnimals = 'LIVE_ANIMALS',
  LiveAnimalsWithFee = 'LIVE_ANIMALS_WITH_FEE',
  Perishables = 'PERISHABLES'
}

export type SpecialHandlingInput = {
  fragile?: InputMaybe<Scalars['Boolean']['input']>;
  special_contents_type?: InputMaybe<SpecialContentsType>;
};

export type StaffDashboardPayload = {
  __typename?: 'StaffDashboardPayload';
  dueTodayOrders: Scalars['Int']['output'];
  overDueOrders: Scalars['Int']['output'];
  pendingOrders: Scalars['Int']['output'];
  response?: Maybe<Response>;
};

export type Stamps = {
  __typename?: 'Stamps';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type StampsBalanceResponsePayload = {
  __typename?: 'StampsBalanceResponsePayload';
  amountAvailable: Scalars['Float']['output'];
  response?: Maybe<Response>;
};

export type StampsCarrierPayload = {
  __typename?: 'StampsCarrierPayload';
  response?: Maybe<Response>;
  shipping_options: Array<IShippingOption>;
};

export type StampsCredentialsPayload = {
  __typename?: 'StampsCredentialsPayload';
  clientId: Scalars['String']['output'];
  credentialsExist: Scalars['Boolean']['output'];
  response?: Maybe<Response>;
};

export type StampsPayload = {
  __typename?: 'StampsPayload';
  response?: Maybe<Response>;
  stamps?: Maybe<Stamps>;
};

export type StampsRatesResponsePayload = {
  __typename?: 'StampsRatesResponsePayload';
  rates: Array<StampsShippingRatesPayload>;
  response?: Maybe<Response>;
};

export type StampsShippingRatesPayload = {
  __typename?: 'StampsShippingRatesPayload';
  carrier: Scalars['String']['output'];
  estimated_delivery_date?: Maybe<Scalars['String']['output']>;
  estimated_delivery_days?: Maybe<Scalars['String']['output']>;
  is_customs_required?: Maybe<Scalars['Boolean']['output']>;
  is_guaranteed_service?: Maybe<Scalars['Boolean']['output']>;
  is_return_label?: Maybe<Scalars['Boolean']['output']>;
  packaging_type: PackagingType;
  service_type: Scalars['String']['output'];
  shipment_cost?: Maybe<ShipmentCostType>;
  trackable?: Maybe<Scalars['String']['output']>;
};

export type State = {
  __typename?: 'State';
  countryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type StatesPayload = {
  __typename?: 'StatesPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  states?: Maybe<Array<Maybe<State>>>;
};

export type StripeCard = {
  __typename?: 'StripeCard';
  brand?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<StripeCardMetaData>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StripeCardMetaData = {
  __typename?: 'StripeCardMetaData';
  organizationId?: Maybe<Scalars['String']['output']>;
};

export type StripeCardsPayload = {
  __typename?: 'StripeCardsPayload';
  cards?: Maybe<Array<StripeCard>>;
  response?: Maybe<Response>;
};

export enum StripeInternalType {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export enum StripePaymentIntentType {
  Card = 'CARD',
  UsBankAccount = 'US_BANK_ACCOUNT'
}

export type StripePrice = {
  __typename?: 'StripePrice';
  active?: Maybe<Scalars['Boolean']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  interval?: Maybe<StripeInternalType>;
  intervalCount?: Maybe<Scalars['Int']['output']>;
  metaData?: Maybe<StripePriceMetaData>;
  nickname?: Maybe<Scalars['String']['output']>;
  product?: Maybe<StripeProduct>;
  productId?: Maybe<Scalars['String']['output']>;
};

export type StripePriceMetaData = {
  __typename?: 'StripePriceMetaData';
  type?: Maybe<Scalars['String']['output']>;
};

export type StripeProduct = {
  __typename?: 'StripeProduct';
  active?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  metaData?: Maybe<StripeProductMetaData>;
  name: Scalars['String']['output'];
  price?: Maybe<StripePrice>;
  priceId?: Maybe<Scalars['String']['output']>;
};

export type StripeProductMetaData = {
  __typename?: 'StripeProductMetaData';
  features?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type StripeProductsPayload = {
  __typename?: 'StripeProductsPayload';
  products?: Maybe<Array<StripeProduct>>;
  response?: Maybe<Response>;
};

export type StripeSetupIntent = {
  __typename?: 'StripeSetupIntent';
  clientSecret?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  /** Stripe paymentIntent id */
  id: Scalars['String']['output'];
  metadata?: Maybe<StripeSetupIntentMetaData>;
  status?: Maybe<StripeSetupIntentStatus>;
};

export type StripeSetupIntentMetaData = {
  __typename?: 'StripeSetupIntentMetaData';
  type?: Maybe<Scalars['String']['output']>;
};

export type StripeSetupIntentPayload = {
  __typename?: 'StripeSetupIntentPayload';
  response?: Maybe<Response>;
  stripeSetupIntent?: Maybe<StripeSetupIntent>;
};

export enum StripeSetupIntentStatus {
  Canceled = 'CANCELED',
  Processing = 'PROCESSING',
  RequiresAction = 'REQUIRES_ACTION',
  RequiresConfirmation = 'REQUIRES_CONFIRMATION',
  RequiresPaymentMethod = 'REQUIRES_PAYMENT_METHOD',
  Succeeded = 'SUCCEEDED'
}

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  clientSecret: Scalars['String']['output'];
  created: Scalars['Int']['output'];
  currency: Scalars['String']['output'];
  customer: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  metaData?: Maybe<StripeSubscriptionMetaData>;
  priceId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  status?: Maybe<StripeSubscriptionStatus>;
};

export type StripeSubscriptionMetaData = {
  __typename?: 'StripeSubscriptionMetaData';
  organizationId?: Maybe<Scalars['String']['output']>;
};

export type StripeSubscriptionPayload = {
  __typename?: 'StripeSubscriptionPayload';
  response?: Maybe<Response>;
  subscription?: Maybe<StripeSubscription>;
};

export enum StripeSubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Incomplete = 'INCOMPLETE',
  IncompleteExpired = 'INCOMPLETE_EXPIRED',
  PastDue = 'PAST_DUE',
  Trailing = 'TRAILING',
  Unpaid = 'UNPAID'
}

export type SubCategoriesPayload = {
  __typename?: 'SubCategoriesPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  subCategories?: Maybe<Array<SubCategory>>;
};

export type SubCategory = {
  __typename?: 'SubCategory';
  category?: Maybe<Category>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId?: Maybe<Scalars['String']['output']>;
  status: SubCategoryStatus;
  updatedAt: Scalars['String']['output'];
};

export type SubCategoryPayload = {
  __typename?: 'SubCategoryPayload';
  response?: Maybe<Response>;
  subCategory?: Maybe<SubCategory>;
};

export enum SubCategoryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type SubDepartmentPayload = {
  __typename?: 'SubDepartmentPayload';
  response?: Maybe<Response>;
  subDepartment?: Maybe<Department>;
};

export type SubDepartmentsPayload = {
  __typename?: 'SubDepartmentsPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  subDepartments?: Maybe<Array<Department>>;
};

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  seatCount?: Maybe<Scalars['Int']['output']>;
  stripePlanId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SubscriptionPlanPayload = {
  __typename?: 'SubscriptionPlanPayload';
  response?: Maybe<Response>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
};

export type SubscriptionPlansPayload = {
  __typename?: 'SubscriptionPlansPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  subscriptionPlans?: Maybe<Array<SubscriptionPlan>>;
};

/** Subscription's payment status of an organization */
export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Incomplete = 'INCOMPLETE',
  IncompleteExpired = 'INCOMPLETE_EXPIRED',
  PastDue = 'PAST_DUE',
  Paused = 'PAUSED',
  Trailing = 'TRAILING',
  Unpaid = 'UNPAID'
}

export type SuperAdminChartPayload = {
  __typename?: 'SuperAdminChartPayload';
  lastYearRevenue: Array<RevenueType>;
  response?: Maybe<Response>;
  thisYearRevenue: Array<RevenueType>;
};

export type SuperAdminDashboardPayload = {
  __typename?: 'SuperAdminDashboardPayload';
  currentMonthRevenue: Scalars['Float']['output'];
  registeredOrgs: Scalars['Int']['output'];
  response?: Maybe<Response>;
  totalRevenue: Scalars['Float']['output'];
};

export type SystemAddon = {
  __typename?: 'SystemAddon';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  shortCode?: Maybe<Scalars['String']['output']>;
  systemAddonAnswers?: Maybe<Array<SystemAddonAnswers>>;
  updatedAt: Scalars['String']['output'];
};

export type SystemAddonAnswers = {
  __typename?: 'SystemAddonAnswers';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  l1?: Maybe<Scalars['Float']['output']>;
  l2?: Maybe<Scalars['Float']['output']>;
  l3?: Maybe<Scalars['Float']['output']>;
  l4?: Maybe<Scalars['Float']['output']>;
  l5?: Maybe<Scalars['Float']['output']>;
  l6?: Maybe<Scalars['Float']['output']>;
  l7?: Maybe<Scalars['Float']['output']>;
  l8?: Maybe<Scalars['Float']['output']>;
  l9?: Maybe<Scalars['Float']['output']>;
  l10?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemAddonId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SystemAddonPayload = {
  __typename?: 'SystemAddonPayload';
  response?: Maybe<Response>;
  systemAddon?: Maybe<SystemAddon>;
};

export type Task = {
  __typename?: 'Task';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  days?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  followOrgTime?: Maybe<Scalars['Boolean']['output']>;
  hours?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  minutes?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<TaskStatus>;
  turnAroundDuration?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type TaskPayload = {
  __typename?: 'TaskPayload';
  response?: Maybe<Response>;
  task?: Maybe<Task>;
};

export enum TaskStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type TasksPayload = {
  __typename?: 'TasksPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  tasks?: Maybe<Array<Task>>;
};

export type Tax = {
  __typename?: 'Tax';
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type TaxPayload = {
  __typename?: 'TaxPayload';
  response?: Maybe<Response>;
  tax?: Maybe<Tax>;
};

export type TaxesPayload = {
  __typename?: 'TaxesPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  taxes?: Maybe<Array<Maybe<Tax>>>;
};

export type TemplateVariable = {
  __typename?: 'TemplateVariable';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TemplateVariableListPayload = {
  __typename?: 'TemplateVariableListPayload';
  response?: Maybe<Response>;
  templateVariables?: Maybe<Array<TemplateVariable>>;
};

export type TrackingDestination = {
  __typename?: 'TrackingDestination';
  city?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  state_province?: Maybe<Scalars['String']['output']>;
};

export type TrackingEvent = {
  __typename?: 'TrackingEvent';
  carrier_status_code?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  event_description?: Maybe<Scalars['String']['output']>;
  occured_at?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  signed_by?: Maybe<Scalars['String']['output']>;
  state_province?: Maybe<Scalars['String']['output']>;
};

export type UpdateAddonAnswerInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  l1?: InputMaybe<Scalars['Float']['input']>;
  l2?: InputMaybe<Scalars['Float']['input']>;
  l3?: InputMaybe<Scalars['Float']['input']>;
  l4?: InputMaybe<Scalars['Float']['input']>;
  l5?: InputMaybe<Scalars['Float']['input']>;
  l6?: InputMaybe<Scalars['Float']['input']>;
  l7?: InputMaybe<Scalars['Float']['input']>;
  l8?: InputMaybe<Scalars['Float']['input']>;
  l9?: InputMaybe<Scalars['Float']['input']>;
  l10?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType?: InputMaybe<AddressType>;
  addressableId?: InputMaybe<Scalars['String']['input']>;
  addressableType?: InputMaybe<AddressableType>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  taxableReason?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAddressShippingDetails = {
  address: UpdateFromAddressInput;
  fromAddress?: InputMaybe<UpdateFromAddressInput>;
  packageDetail?: InputMaybe<LabelInput>;
  shippingDetail: UpdateOrderShipping;
};

export type UpdateBulkProductPricingInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  l1?: InputMaybe<Scalars['Float']['input']>;
  l2?: InputMaybe<Scalars['Float']['input']>;
  l3?: InputMaybe<Scalars['Float']['input']>;
  l4?: InputMaybe<Scalars['Float']['input']>;
  l5?: InputMaybe<Scalars['Float']['input']>;
  l6?: InputMaybe<Scalars['Float']['input']>;
  l7?: InputMaybe<Scalars['Float']['input']>;
  l8?: InputMaybe<Scalars['Float']['input']>;
  l9?: InputMaybe<Scalars['Float']['input']>;
  l10?: InputMaybe<Scalars['Float']['input']>;
  quantity: Scalars['Int']['input'];
};

export type UpdateBulkProductStepsInput = {
  deleteIds?: InputMaybe<Array<Scalars['String']['input']>>;
  productId: Scalars['String']['input'];
  updateIds: Array<BulkProductStepsInput>;
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CategoryStatus>;
};

export type UpdateContact = {
  acceptEmail?: InputMaybe<Scalars['Boolean']['input']>;
  acceptMessage?: InputMaybe<Scalars['Boolean']['input']>;
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  ccEmail1?: InputMaybe<Scalars['String']['input']>;
  ccEmail2?: InputMaybe<Scalars['String']['input']>;
  contactType?: InputMaybe<ContactType>;
  contactableId?: InputMaybe<Scalars['String']['input']>;
  contactableType?: InputMaybe<ContactableType>;
  extensionNo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactInput = {
  acceptEmail?: InputMaybe<Scalars['Boolean']['input']>;
  acceptMessage?: InputMaybe<Scalars['Boolean']['input']>;
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  ccEmail1?: InputMaybe<Scalars['String']['input']>;
  ccEmail2?: InputMaybe<Scalars['String']['input']>;
  contactType?: InputMaybe<ContactType>;
  contactableId?: InputMaybe<Scalars['String']['input']>;
  contactableType?: InputMaybe<ContactableType>;
  extensionNo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerBillingInfoInput = {
  billingInfo: UpdateAddressInput;
  /** customer Id */
  id: Scalars['String']['input'];
  regular: Scalars['Boolean']['input'];
};

export type UpdateCustomerInput = {
  authCustomerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pricingLevel?: InputMaybe<PricingLevelEnum>;
  regular?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<CustomerStatus>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CustomerType>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDepartmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DepartmentStatus>;
};

export type UpdateDiscountCodeInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<DiscountStatus>;
  type?: InputMaybe<DiscountType>;
  validateUpto?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDiscountProductsAndCustomerInput = {
  customers?: InputMaybe<Array<Scalars['String']['input']>>;
  delCustomersIds?: InputMaybe<Array<Scalars['String']['input']>>;
  delProductsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['String']['input'];
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateEmployeeBasicInfoInput = {
  dob?: InputMaybe<Scalars['String']['input']>;
  drivingLicense?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  removeDepartments?: InputMaybe<Array<Scalars['String']['input']>>;
  ssn?: InputMaybe<Scalars['String']['input']>;
  updateDepartments: Array<Scalars['String']['input']>;
};

export type UpdateEmployeeContactInfo = {
  emergencyContact?: InputMaybe<UpdateContact>;
  id: Scalars['String']['input'];
  selfContact?: InputMaybe<UpdateContact>;
};

export type UpdateEmployeeInput = {
  dob?: InputMaybe<Scalars['String']['input']>;
  drivingLicense?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFromAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType?: InputMaybe<AddressType>;
  addressableId?: InputMaybe<Scalars['String']['input']>;
  addressableType?: InputMaybe<AddressableType>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  taxableReason?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderCancelRequestInput = {
  declineReason?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  status: RequestStatus;
};

export type UpdateOrderInput = {
  carrier?: InputMaybe<Scalars['String']['input']>;
  delProducts?: InputMaybe<Array<Scalars['String']['input']>>;
  dropShippingAddress?: InputMaybe<UpdateOrderShippingAddress>;
  id: Scalars['String']['input'];
  orderInput: OrderInput;
  orderShippingId?: InputMaybe<Scalars['String']['input']>;
  paymentInput?: InputMaybe<OrderPaymentInput>;
  products: Array<UpdateOrderProductInput>;
  shippingAddress?: InputMaybe<UpdateOrderShippingAddress>;
  shippingServiceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderProductInput = {
  addons: Array<CreateOrderItemAddonInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type UpdateOrderShipping = {
  applyInsurance?: InputMaybe<Scalars['Boolean']['input']>;
  applyPackageType?: InputMaybe<Scalars['Boolean']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  shipmentCost?: InputMaybe<Scalars['Float']['input']>;
  shippingInstructions?: InputMaybe<Scalars['String']['input']>;
  shippingLabel?: InputMaybe<Scalars['String']['input']>;
  shippingNo?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderShippingAddress = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
  taxableReason?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderShippingDetailInput = {
  /** order id */
  id: Scalars['String']['input'];
  shippingInstructions?: InputMaybe<Scalars['String']['input']>;
  shippingNo?: InputMaybe<Scalars['String']['input']>;
  shippingServiceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderStatusInput = {
  delNote?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  orderReady?: InputMaybe<Scalars['Boolean']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
};

export type UpdateOrderStepInput = {
  isCompleted: Scalars['Boolean']['input'];
  orderId: Scalars['String']['input'];
  orderReady?: InputMaybe<Scalars['Boolean']['input']>;
  productStepId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrgInput = {
  cancellationLimit?: InputMaybe<Scalars['Int']['input']>;
  closingTime?: InputMaybe<Scalars['String']['input']>;
  creatorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  noOfUsers?: InputMaybe<Scalars['Int']['input']>;
  openingTime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrganizationStatus>;
};

export type UpdateOrgSubscriptionInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SubscriptionStatus>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  subscriptionPlanId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  chargedAttemptAt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  invoiceNo?: InputMaybe<Scalars['String']['input']>;
  nextPayment?: InputMaybe<Scalars['String']['input']>;
  paidAt?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  pdfUrl?: InputMaybe<Scalars['String']['input']>;
  stripePaymentId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PaymentTypeStatus>;
};

export type UpdatePricingLevelInput = {
  id: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductAddonInput = {
  addonAnswerInput: Array<UpdateAddonAnswerInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  shortCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountable?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  shortCode?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProductStatus>;
  subCategoryId?: InputMaybe<Scalars['String']['input']>;
  taxable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateProductStepInput = {
  id: Scalars['String']['input'];
  productId?: InputMaybe<Scalars['String']['input']>;
  stepId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSettingProcessorInput = {
  type: PaymentProcessors;
};

export type UpdateSettingsInput = {
  clientKey?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  stripeApiKey?: InputMaybe<Scalars['String']['input']>;
  stripeApiSecret?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PaymentProcessors>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShippingServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ShippingServiceStatus>;
};

export type UpdateStaffBasicInfoInput = {
  dob?: InputMaybe<Scalars['String']['input']>;
  drivingLicense?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  removeDepartments?: InputMaybe<Array<Scalars['String']['input']>>;
  ssn?: InputMaybe<Scalars['String']['input']>;
  updateDepartments: Array<Scalars['String']['input']>;
};

export type UpdateStaffDepartmentsInput = {
  departments: Array<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
};

export type UpdateStaffInput = {
  dob?: InputMaybe<Scalars['String']['input']>;
  drivingLicense?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  ssn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubCategoryInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SubCategoryStatus>;
};

export type UpdateSubDepartmentInput = {
  departmentId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubscriptionPlanInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  seatCount?: InputMaybe<Scalars['Int']['input']>;
  stripePlanId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSystemAddonInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shortCode?: InputMaybe<Scalars['String']['input']>;
  systemAddonAnswerInput?: InputMaybe<Array<UpdateSystemAnswer>>;
};

export type UpdateSystemAnswer = {
  id?: InputMaybe<Scalars['String']['input']>;
  l1?: InputMaybe<Scalars['Float']['input']>;
  l2?: InputMaybe<Scalars['Float']['input']>;
  l3?: InputMaybe<Scalars['Float']['input']>;
  l4?: InputMaybe<Scalars['Float']['input']>;
  l5?: InputMaybe<Scalars['Float']['input']>;
  l6?: InputMaybe<Scalars['Float']['input']>;
  l7?: InputMaybe<Scalars['Float']['input']>;
  l8?: InputMaybe<Scalars['Float']['input']>;
  l9?: InputMaybe<Scalars['Float']['input']>;
  l10?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
};

export type UpdateTaskInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  days?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followOrgTime?: InputMaybe<Scalars['Boolean']['input']>;
  hours?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  minutes?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TaskStatus>;
};

export type UpdateTaxInput = {
  countryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['Float']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<UserRoles>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  dob?: Maybe<Scalars['String']['output']>;
  drivingLicense?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  joiningDate?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']['output']>;
  profileUrl?: Maybe<Scalars['String']['output']>;
  ssn?: Maybe<Scalars['String']['output']>;
  staffDepartments?: Maybe<Array<UserDepartment>>;
  staffEmergencyContact?: Maybe<Contact>;
  staffSelfAddress?: Maybe<Address>;
  staffSelfContact?: Maybe<Contact>;
  status: UserStatus;
  updatedAt: Scalars['String']['output'];
  userName?: Maybe<Scalars['String']['output']>;
  userType: UserRoles;
};

export type UserDepartment = {
  __typename?: 'UserDepartment';
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  dob?: InputMaybe<Scalars['String']['input']>;
  drivingLicense?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role: EmployeeRoles;
  ssn?: InputMaybe<Scalars['String']['input']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  response?: Maybe<Response>;
  user?: Maybe<User>;
};

/** The user role assigned */
export enum UserRoles {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Manager = 'MANAGER',
  Staff = 'STAFF',
  SuperAdmin = 'SUPER_ADMIN'
}

/** The user status */
export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Invited = 'INVITED'
}

export type UsersPayload = {
  __typename?: 'UsersPayload';
  pagination: PaginationPayload;
  response?: Maybe<Response>;
  users?: Maybe<Array<User>>;
};

export type VerifyUserAndUpdatePasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VoidLabelInput = {
  id: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export enum WeightType {
  Gram = 'GRAM',
  Kilogram = 'KILOGRAM',
  Ounce = 'OUNCE',
  Pound = 'POUND'
}

export type YearlySalesDataPayload = {
  __typename?: 'YearlySalesDataPayload';
  productsSoldByMonth?: Maybe<Array<Scalars['Int']['output']>>;
  response?: Maybe<Response>;
  totalSalesByMonth?: Maybe<Array<Scalars['Float']['output']>>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PackageType = {
  dimension_unit?: InputMaybe<DimensionType>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  packaging_type?: InputMaybe<PackagingType>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weight_unit?: InputMaybe<WeightType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateAdminInfo = {
  address?: InputMaybe<UpdateAddressInput>;
  user?: InputMaybe<UpdateUserInput>;
};

export type UpdateOrgInfo = {
  address?: InputMaybe<UpdateAddressInput>;
  org?: InputMaybe<UpdateOrgInput>;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', token: string, response?: { __typename?: 'Response', message?: string | null, status?: number | null } | null } };

export type LoginCustomerMutationVariables = Exact<{
  customerLoginInput: CustomerLoginInput;
}>;


export type LoginCustomerMutation = { __typename?: 'Mutation', loginCustomer: { __typename?: 'LoginPayload', token: string, response?: { __typename?: 'Response', message?: string | null, status?: number | null } | null } };

export type CustomerForgotPasswordMutationVariables = Exact<{
  customerForgotPasswordInput: CustomerForgotPasswordInput;
}>;


export type CustomerForgotPasswordMutation = { __typename?: 'Mutation', customerForgotPassword: { __typename?: 'ForgotPasswordPayload', response?: { __typename?: 'Response', message?: string | null, status?: number | null } | null } };

export type FetchStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchStaffQuery = { __typename?: 'Query', fetchStaff: { __typename?: 'UserPayload', user?: { __typename?: 'User', id: string, email: string, firstName?: string | null, lastName?: string | null, userType: UserRoles } | null } };

export type FetchUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUserQuery = { __typename?: 'Query', fetchUser: { __typename?: 'UserPayload', user?: { __typename?: 'User', id: string, email: string, firstName?: string | null, lastName?: string | null, userType: UserRoles } | null } };

export type GetSuperAdminDashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSuperAdminDashboardQuery = { __typename?: 'Query', getSuperAdminDashboard: { __typename?: 'SuperAdminDashboardPayload', registeredOrgs: number, totalRevenue: number, currentMonthRevenue: number } };

export type GetSuperAdminChartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSuperAdminChartQuery = { __typename?: 'Query', getSuperAdminChart: { __typename?: 'SuperAdminChartPayload', lastYearRevenue: Array<{ __typename?: 'RevenueType', month: string, revenue: number }>, thisYearRevenue: Array<{ __typename?: 'RevenueType', month: string, revenue: number }> } };

export type FindAllGrandInvoicesQueryVariables = Exact<{
  findAllGrandInvoicesInput: FindAllGrandInvoicesInput;
}>;


export type FindAllGrandInvoicesQuery = { __typename?: 'Query', findAllGrandInvoices: { __typename?: 'GrandInvoicesPayload', grandInvoices?: Array<{ __typename?: 'GrandInvoice', id: string, amount?: number | null, billableAmount?: number | null, createdAt?: string | null, status?: GrandInvoiceStatus | null, customer?: { __typename?: 'Customer', name?: string | null } | null }> | null, pagination: { __typename?: 'PaginationPayload', totalCount?: number | null, page?: number | null, totalPages?: number | null } } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"response"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LoginCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerLoginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerLoginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerLoginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"response"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<LoginCustomerMutation, LoginCustomerMutationVariables>;
export const CustomerForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CustomerForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerForgotPasswordInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerForgotPasswordInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerForgotPasswordInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"response"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<CustomerForgotPasswordMutation, CustomerForgotPasswordMutationVariables>;
export const FetchStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchStaff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchStaff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]}}]} as unknown as DocumentNode<FetchStaffQuery, FetchStaffQueryVariables>;
export const FetchUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]}}]} as unknown as DocumentNode<FetchUserQuery, FetchUserQueryVariables>;
export const GetSuperAdminDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSuperAdminDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSuperAdminDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registeredOrgs"}},{"kind":"Field","name":{"kind":"Name","value":"totalRevenue"}},{"kind":"Field","name":{"kind":"Name","value":"currentMonthRevenue"}}]}}]}}]} as unknown as DocumentNode<GetSuperAdminDashboardQuery, GetSuperAdminDashboardQueryVariables>;
export const GetSuperAdminChartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSuperAdminChart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSuperAdminChart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastYearRevenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thisYearRevenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"revenue"}}]}}]}}]}}]} as unknown as DocumentNode<GetSuperAdminChartQuery, GetSuperAdminChartQueryVariables>;
export const FindAllGrandInvoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllGrandInvoices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"findAllGrandInvoicesInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindAllGrandInvoicesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllGrandInvoices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"findAllGrandInvoicesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"findAllGrandInvoicesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grandInvoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"billableAmount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllGrandInvoicesQuery, FindAllGrandInvoicesQueryVariables>;
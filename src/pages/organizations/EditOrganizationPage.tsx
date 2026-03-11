import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client/react';
import {
  GetOrgDocument,
  UpdateOrgInfoDocument,
  UpdateAdminInfoDocument,
  DeleteOrgDocument,
} from '../../generated/graphql/graphql';
import { ROUTES } from '../../constants';
import { useToast } from '../../contexts/ToastContext';
import { Breadcrumb } from '../../components/organizations/Breadcrumb';
import { IconArrowLeft, IconPencilSimple, IconXCircle } from '../../assets/organization-icons';

function formatDate(iso: string | null | undefined): string {
  if (iso == null || iso === '') return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function EditOrganizationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [orgSaveLoading, setOrgSaveLoading] = useState(false);
  const [adminSaveLoading, setAdminSaveLoading] = useState(false);
  const [deactivateLoading, setDeactivateLoading] = useState(false);

  const { data, loading } = useQuery(GetOrgDocument, {
    variables: { getOrgInput: { id: id ?? '' } },
    skip: !id,
  });

  const org = data?.getOrg?.organization;
  const adminUser = org?.adminUser;
  const orgAddress = org?.address;
  const adminAddress = adminUser?.staffSelfAddress;
  const subscription = org?.orgSubscription?.[0];

  const [orgName, setOrgName] = useState('');
  const [noOfUsers, setNoOfUsers] = useState('');
  const [orgPhone, setOrgPhone] = useState('');
  const [orgAddress1, setOrgAddress1] = useState('');
  const [orgAddress2, setOrgAddress2] = useState('');
  const [orgZipCode, setOrgZipCode] = useState('');
  const [orgCity, setOrgCity] = useState('');
  const [orgState, setOrgState] = useState('');
  const [orgCountry, setOrgCountry] = useState('');

  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPhone, setAdminPhone] = useState('');
  const [adminAddress1, setAdminAddress1] = useState('');
  const [adminAddress2, setAdminAddress2] = useState('');
  const [adminZipCode, setAdminZipCode] = useState('');
  const [adminCity, setAdminCity] = useState('');
  const [adminState, setAdminState] = useState('');
  const [adminCountry, setAdminCountry] = useState('');

  useEffect(() => {
    if (org) {
      setOrgName(org.name ?? '');
      setNoOfUsers(String(org.noOfUsers ?? ''));
      setOrgPhone(orgAddress?.phone ?? '');
      setOrgAddress1(orgAddress?.address1 ?? '');
      setOrgAddress2(orgAddress?.address2 ?? '');
      setOrgZipCode(orgAddress?.zipCode ?? '');
      setOrgCity(orgAddress?.city ?? '');
      setOrgState(orgAddress?.stateId ?? '');
      setOrgCountry(orgAddress?.countryId ?? '');
    }
  }, [org, orgAddress]);

  useEffect(() => {
    if (adminUser) {
      const first = adminUser.firstName ?? '';
      const last = adminUser.lastName ?? '';
      setAdminName([first, last].filter(Boolean).join(' '));
      setAdminEmail(adminUser.email ?? '');
      setAdminPhone(adminAddress?.phone ?? '');
      setAdminAddress1(adminAddress?.address1 ?? '');
      setAdminAddress2(adminAddress?.address2 ?? '');
      setAdminZipCode(adminAddress?.zipCode ?? '');
      setAdminCity(adminAddress?.city ?? '');
      setAdminState(adminAddress?.stateId ?? '');
      setAdminCountry(adminAddress?.countryId ?? '');
    }
  }, [adminUser, adminAddress]);

  const [updateOrgInfo] = useMutation(UpdateOrgInfoDocument);
  const [updateAdminInfo] = useMutation(UpdateAdminInfoDocument);
  const [deleteOrg] = useMutation(DeleteOrgDocument);

  const handleSaveOrgInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setOrgSaveLoading(true);
    try {
      const result = await updateOrgInfo({
        variables: {
          updateOrgInfo: {
            org: {
              id,
              name: orgName.trim() || undefined,
              noOfUsers: noOfUsers ? parseInt(noOfUsers, 10) : undefined,
            },
            ...(org?.address?.id && {
              address: {
                id: org.address.id,
                address1: orgAddress1 || undefined,
                address2: orgAddress2 || undefined,
                zipCode: orgZipCode || undefined,
                city: orgCity || undefined,
                stateId: orgState || undefined,
                countryId: orgCountry || undefined,
                phone: orgPhone || undefined,
              },
            }),
          },
        },
      });
      const status = result.data?.updateOrgInfo?.response?.status;
      const resp = result.data?.updateOrgInfo?.response;
      const msg = resp?.error ?? resp?.message;
      if (status === 200 || status === 201) {
        addToast('Organization contact info saved.', 'success');
      } else {
        addToast(msg ?? 'Failed to save organization info.', 'error');
      }
    } catch (err) {
      addToast(err instanceof Error ? err.message : 'Failed to save organization info.', 'error');
    } finally {
      setOrgSaveLoading(false);
    }
  };

  const handleSaveAdminInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminUser?.id) return;
    setAdminSaveLoading(true);
    try {
      const [first, ...rest] = adminName.trim().split(/\s+/);
      const lastName = rest.length > 0 ? rest.join(' ') : first;
      const result = await updateAdminInfo({
        variables: {
          updateAdminInfo: {
            user: {
              id: adminUser.id,
              email: adminEmail.trim() || undefined,
              firstName: first || undefined,
              lastName: lastName || undefined,
            },
            address: adminAddress?.id
              ? {
                  id: adminAddress.id,
                  address1: adminAddress1 || undefined,
                  address2: adminAddress2 || undefined,
                  zipCode: adminZipCode || undefined,
                  city: adminCity || undefined,
                  stateId: adminState || undefined,
                  countryId: adminCountry || undefined,
                  phone: adminPhone || undefined,
                }
              : undefined,
          },
        },
      });
      const status = result.data?.updateAdminInfo?.response?.status;
      const resp = result.data?.updateAdminInfo?.response;
      const msg = resp?.error ?? resp?.message;
      if (status === 200 || status === 201) {
        addToast('Admin contact info saved.', 'success');
      } else {
        addToast(msg ?? 'Failed to save admin info.', 'error');
      }
    } catch (err) {
      addToast(err instanceof Error ? err.message : 'Failed to save admin info.', 'error');
    } finally {
      setAdminSaveLoading(false);
    }
  };

  const handleDeactivate = async () => {
    if (!id || !window.confirm('Are you sure you want to deactivate this organization?')) return;
    setDeactivateLoading(true);
    try {
      const result = await deleteOrg({ variables: { deleteOrgInput: { id } } });
      const status = result.data?.deleteOrg?.response?.status;
      const resp = result.data?.deleteOrg?.response;
      const msg = resp?.error ?? resp?.message;
      if (status === 200 || status === 201) {
        addToast('Organization deactivated.', 'success');
        navigate(ROUTES.ORGANIZATIONS);
      } else {
        addToast(msg ?? 'Failed to deactivate organization.', 'error');
      }
    } catch (err) {
      addToast(err instanceof Error ? err.message : 'Failed to deactivate organization.', 'error');
    } finally {
      setDeactivateLoading(false);
    }
  };

  const fieldClass =
    'auth-input h-14 w-full rounded-lg border border-[var(--auth-border)] px-3 text-base text-[var(--auth-text-primary)] placeholder:text-[var(--auth-text-disabled)]';
  const labelClass =
    'absolute left-3 -top-2.5 bg-white px-0.5 text-xs font-normal text-[var(--auth-text-disabled)]';

  if (!id) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-[var(--auth-text-secondary)]">Invalid organization.</p>
        <Link to={ROUTES.ORGANIZATIONS} className="text-[var(--auth-primary)] hover:underline">
          Back to Organizations
        </Link>
      </div>
    );
  }

  if (loading || !org) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-[var(--auth-text-secondary)]">{loading ? 'Loading…' : 'Organization not found.'}</p>
        <Link to={ROUTES.ORGANIZATIONS} className="text-[var(--auth-primary)] hover:underline">
          Back to Organizations
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link
            to={ROUTES.ORGANIZATIONS}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--auth-text-primary)] hover:bg-black/5"
            aria-label="Back to Organizations"
          >
            <IconArrowLeft className="h-8 w-8" />
          </Link>
          <h1 className="font-bold text-2xl leading-9 text-[var(--auth-text-primary)]">
            Edit Organization
          </h1>
        </div>
      </header>
      <Breadcrumb
        items={[
          { label: 'Dashboard', to: ROUTES.DASHBOARD },
          { label: 'Organizations', to: ROUTES.ORGANIZATIONS },
          { label: 'Edit Organization' },
        ]}
      />

      {/* Summary cards: Staff Members, Customers */}
      <div className="flex rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
        <div className="flex flex-1 flex-col items-center justify-center border-r border-[var(--auth-border)] py-4">
          <p className="font-bold text-2xl leading-9 text-[var(--auth-text-primary)]">
            {org.staffCount ?? 0}
          </p>
          <p className="text-sm font-normal leading-[22px] text-[var(--auth-text-secondary)]">
            Staff Members
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-4">
          <p className="font-bold text-2xl leading-9 text-[var(--auth-text-primary)]">
            {org.customersCount ?? 0}
          </p>
          <p className="text-sm font-normal leading-[22px] text-[var(--auth-text-secondary)]">
            Customers
          </p>
        </div>
      </div>

      {/* Subscription Plan card */}
      {subscription && (
        <div className="rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
          <p className="mb-4 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
            Subscription Plan
          </p>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="font-bold text-2xl leading-9 text-[var(--auth-text-primary)]">
              {subscription.subscriptionPlan?.name ?? '—'}
            </p>
            <p className="text-base font-normal leading-9 text-[var(--auth-text-primary)]">
              {formatDate(subscription.startDate ?? undefined)} – {formatDate(subscription.endDate ?? undefined)}
            </p>
          </div>
          <div className="mt-2 text-sm font-normal leading-[22px] text-[var(--auth-text-secondary)]">
            <p>Next invoice date: {formatDate(subscription.endDate ?? undefined)}</p>
            <p>Next invoice amount: ${subscription.subscriptionPlan?.amount ?? '—'}</p>
          </div>
        </div>
      )}

      {/* Upload image card */}
      <div className="max-w-[344px] rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-[var(--auth-border)] bg-[#f4f6f8]">
            <span className="text-xs text-[var(--auth-text-secondary)]">Logo</span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg p-1 text-[13px] font-bold leading-[22px] text-[#36f] hover:underline"
            >
              <IconPencilSimple className="h-[18px] w-[18px]" />
              Upload Image
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg p-1 text-[13px] font-bold leading-[22px] text-[#ff4842] hover:underline"
            >
              <IconXCircle className="h-[18px] w-[18px]" />
              Remove Image
            </button>
          </div>
          <p className="text-center text-xs font-normal leading-[18px] text-[var(--auth-text-secondary)]">
            Allowed *.jpeg, *.jpg, *.png, *.gif
            <br />
            Max size of 3 MB
          </p>
        </div>
      </div>

      {/* Organization Info + Admin Info side by side */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <form onSubmit={handleSaveOrgInfo} className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
          <p className="text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
            Organization Info
          </p>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <label className={labelClass}>Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label className={labelClass}>No. of Users</label>
              <input
                type="number"
                min={1}
                value={noOfUsers}
                onChange={(e) => setNoOfUsers(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label className={labelClass}>Phone</label>
              <input
                type="text"
                value={orgPhone}
                onChange={(e) => setOrgPhone(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label className={labelClass}>Address 1</label>
              <input
                type="text"
                value={orgAddress1}
                onChange={(e) => setOrgAddress1(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={orgAddress2}
                onChange={(e) => setOrgAddress2(e.target.value)}
                className={fieldClass}
                placeholder="Address 2"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <label className={labelClass}>Zip Code</label>
                <input
                  type="text"
                  value={orgZipCode}
                  onChange={(e) => setOrgZipCode(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div className="relative flex-1">
                <label className={labelClass}>City</label>
                <input
                  type="text"
                  value={orgCity}
                  onChange={(e) => setOrgCity(e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <label className={labelClass}>State</label>
                <input
                  type="text"
                  value={orgState}
                  onChange={(e) => setOrgState(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div className="relative flex-1">
                <label className={labelClass}>Country</label>
                <input
                  type="text"
                  value={orgCountry}
                  onChange={(e) => setOrgCountry(e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={orgSaveLoading}
            className="self-end rounded-lg bg-[var(--auth-primary)] px-4 py-2 text-sm font-bold leading-6 text-white shadow-[0_8px_16px_rgba(0,171,85,0.24)] hover:opacity-95 disabled:opacity-60"
          >
            {orgSaveLoading ? 'Saving…' : 'Save Org. Contact Info'}
          </button>
        </form>

        <form onSubmit={handleSaveAdminInfo} className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
          <p className="text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
            Admin Info
          </p>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <label className={labelClass}>Admin Name</label>
              <input
                type="text"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label className={labelClass}>Email</label>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label className={labelClass}>Phone</label>
              <input
                type="text"
                value={adminPhone}
                onChange={(e) => setAdminPhone(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label className={labelClass}>Address 1</label>
              <input
                type="text"
                value={adminAddress1}
                onChange={(e) => setAdminAddress1(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={adminAddress2}
                onChange={(e) => setAdminAddress2(e.target.value)}
                className={fieldClass}
                placeholder="Address 2"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <label className={labelClass}>Zip Code</label>
                <input
                  type="text"
                  value={adminZipCode}
                  onChange={(e) => setAdminZipCode(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div className="relative flex-1">
                <label className={labelClass}>City</label>
                <input
                  type="text"
                  value={adminCity}
                  onChange={(e) => setAdminCity(e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <label className={labelClass}>State</label>
                <input
                  type="text"
                  value={adminState}
                  onChange={(e) => setAdminState(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div className="relative flex-1">
                <label className={labelClass}>Country</label>
                <input
                  type="text"
                  value={adminCountry}
                  onChange={(e) => setAdminCountry(e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={adminSaveLoading}
            className="self-end rounded-lg bg-[var(--auth-primary)] px-4 py-2 text-sm font-bold leading-6 text-white shadow-[0_8px_16px_rgba(0,171,85,0.24)] hover:opacity-95 disabled:opacity-60"
          >
            {adminSaveLoading ? 'Saving…' : 'Save Admin Contact Info'}
          </button>
        </form>
      </div>

      {/* Deactivate Organization */}
      <div className="max-w-[344px] rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
        <p className="mb-4 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
          Deactivate Organization
        </p>
        <p className="mb-4 text-sm font-normal leading-[22px] text-[var(--auth-text-primary)]">
          If you no longer want this organization to list on this platform, you can deactivate the
          organization by clicking in this link below
        </p>
        <button
          type="button"
          onClick={handleDeactivate}
          disabled={deactivateLoading}
          className="rounded-lg border border-[rgba(255,72,66,0.48)] px-6 py-3 text-[15px] font-bold leading-[26px] text-[#ff4842] hover:bg-red-50 disabled:opacity-60"
        >
          {deactivateLoading ? 'Deactivating…' : 'Deactivate'}
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client/react';
import { CreateOrgDocument, FetchStaffDocument, FetchUserDocument } from '../../generated/graphql/graphql';
import { ROUTES } from '../../constants';
import { useToast } from '../../contexts/ToastContext';
import { Breadcrumb } from '../../components/organizations/Breadcrumb';
import { IconArrowLeft, IconPencilSimple } from '../../assets/organization-icons';

const defaultCancellationLimit = 0;

export default function InviteOrganizationPage() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [submitting, setSubmitting] = useState(false);

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

  const { data: staffData } = useQuery(FetchStaffDocument);
  const { data: userData } = useQuery(FetchUserDocument);
  const currentUser = staffData?.fetchStaff?.user ?? userData?.fetchUser?.user;
  const creatorId = currentUser?.id ?? '';

  const [createOrg] = useMutation(CreateOrgDocument);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim()) {
      addToast('Organization name is required.', 'error');
      return;
    }
    if (!adminEmail.trim()) {
      addToast('Admin email is required.', 'error');
      return;
    }
    const noOfUsersNum = parseInt(noOfUsers, 10);
    if (isNaN(noOfUsersNum) || noOfUsersNum < 1) {
      addToast('No. of users must be at least 1.', 'error');
      return;
    }
    if (!creatorId) {
      addToast('Unable to identify current user. Please sign in again.', 'error');
      return;
    }
    setSubmitting(true);
    try {
      const [first, ...rest] = adminName.trim().split(/\s+/);
      const lastName = rest.length > 0 ? rest.join(' ') : first;
      const firstName = first ?? '';

      const result = await createOrg({
        variables: {
          createOrgInput: {
            organization: {
              name: orgName.trim(),
              noOfUsers: noOfUsersNum,
              creatorId,
              cancellationLimit: defaultCancellationLimit,
              description: '',
            },
            user: {
              email: adminEmail.trim(),
              firstName: firstName || undefined,
              lastName: lastName || undefined,
            },
            orgAddress:
              orgAddress1 || orgAddress2 || orgZipCode || orgCity || orgPhone
                ? {
                    address1: orgAddress1 || undefined,
                    address2: orgAddress2 || undefined,
                    zipCode: orgZipCode || undefined,
                    city: orgCity || undefined,
                    stateId: orgState || undefined,
                    countryId: orgCountry || undefined,
                    phone: orgPhone || undefined,
                  }
                : undefined,
            userAddress:
              adminAddress1 || adminAddress2 || adminZipCode || adminCity || adminPhone
                ? {
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
      const resp = result.data?.createOrg?.response;
      const status = resp?.status;
      const message = resp?.error ?? resp?.message;
      if (status === 200 || status === 201) {
        addToast('Organization created successfully.', 'success');
        navigate(ROUTES.ORGANIZATIONS);
      } else {
        addToast(message ?? 'Failed to create organization.', 'error');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to create organization.';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    'auth-input h-14 w-full rounded-lg border border-[var(--auth-border)] px-3 text-base text-[var(--auth-text-primary)] placeholder:text-[var(--auth-text-disabled)]';
  const labelClass = 'absolute left-3 -top-2.5 bg-white px-0.5 text-xs font-normal text-[var(--auth-text-disabled)]';

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
            Invite Organization
          </h1>
        </div>
        <button
          type="submit"
          form="invite-org-form"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-lg bg-[var(--auth-primary)] px-6 py-3 text-[15px] font-bold leading-[26px] text-white shadow-[0_8px_16px_rgba(0,171,85,0.24)] hover:opacity-95 disabled:opacity-60"
        >
          Create Organization
        </button>
      </header>
      <Breadcrumb
        items={[
          { label: 'Dashboard', to: ROUTES.DASHBOARD },
          { label: 'Organizations', to: ROUTES.ORGANIZATIONS },
          { label: 'Invite Organization' },
        ]}
      />

      <form id="invite-org-form" onSubmit={handleSubmit} className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Organization Info card */}
        <div className="flex-1 rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
          <p className="mb-6 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
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
                placeholder=""
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
                placeholder=""
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={orgPhone}
                onChange={(e) => setOrgPhone(e.target.value)}
                className={fieldClass}
                placeholder="Phone"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={orgAddress1}
                onChange={(e) => setOrgAddress1(e.target.value)}
                className={fieldClass}
                placeholder="Address 1"
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
                <input
                  type="text"
                  value={orgZipCode}
                  onChange={(e) => setOrgZipCode(e.target.value)}
                  className={fieldClass}
                  placeholder="Zip Code"
                />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={orgCity}
                  onChange={(e) => setOrgCity(e.target.value)}
                  className={fieldClass}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={orgState}
                  onChange={(e) => setOrgState(e.target.value)}
                  className={fieldClass}
                  placeholder="State"
                />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={orgCountry}
                  onChange={(e) => setOrgCountry(e.target.value)}
                  className={fieldClass}
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Admin Info card */}
        <div className="flex-1 rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
          <p className="mb-6 text-xs font-bold uppercase leading-[18px] text-[var(--auth-text-secondary)]">
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
                placeholder=""
              />
            </div>
            <div className="relative">
              <label className={labelClass}>Email</label>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className={fieldClass}
                placeholder=""
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={adminPhone}
                onChange={(e) => setAdminPhone(e.target.value)}
                className={fieldClass}
                placeholder="Phone"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={adminAddress1}
                onChange={(e) => setAdminAddress1(e.target.value)}
                className={fieldClass}
                placeholder="Address 1"
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
                <input
                  type="text"
                  value={adminZipCode}
                  onChange={(e) => setAdminZipCode(e.target.value)}
                  className={fieldClass}
                  placeholder="Zip Code"
                />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={adminCity}
                  onChange={(e) => setAdminCity(e.target.value)}
                  className={fieldClass}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={adminState}
                  onChange={(e) => setAdminState(e.target.value)}
                  className={fieldClass}
                  placeholder="State"
                />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={adminCountry}
                  onChange={(e) => setAdminCountry(e.target.value)}
                  className={fieldClass}
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Upload photo card - Figma: below org form */}
      <div className="w-full max-w-[344px] rounded-2xl bg-white p-6 shadow-[0_0_2px_rgba(145,158,171,0.2),0_12px_24px_rgba(145,158,171,0.12)]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-dashed border-[var(--auth-border)]">
            <span className="text-xs text-[var(--auth-text-secondary)]">Upload photo</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg p-1 text-[13px] font-bold leading-[22px] text-[#36f] hover:underline"
          >
            <IconPencilSimple className="h-[18px] w-[18px]" />
            Upload Image
          </button>
          <p className="text-center text-xs font-normal leading-[18px] text-[var(--auth-text-secondary)]">
            Allowed *.jpeg, *.jpg, *.png, *.gif
            <br />
            Max size of 3 MB
          </p>
        </div>
      </div>
    </div>
  );
}

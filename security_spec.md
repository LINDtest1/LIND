# ArtHub Security Specification

## Data Invariants
1. A user can only register artwork if they are signed in and provide a valid certificate number.
2. An artist profile can only be created/activated by the owner of the UID.
3. Submissions must be linked to the authenticated user's UID.
4. Interactions (Likes/Follows) must be unique per user/target pair and linked to the authenticated user.
5. Users cannot modify their `uid` or `createdAt` fields once created.

## The Dirty Dozen Payloads

1. **Identity Spoofing**: Attempt to create a user profile with a different UID than the authenticated user.
2. **Shadow Field Injection**: Attempt to create a user profile with an `isAdmin: true` field not in the schema.
3. **Email Poisioning**: Attempt to update another user's email address.
4. **Orphaned Registration**: Attempt to register artwork without being signed in.
5. **Privilege Escalation**: Attempt to activate another user's artist profile.
6. **Mass Interaction Scraping**: Attempt to list all interactions of all users.
7. **Junk ID Attack**: Attempt to create a document with a 2MB string as the ID.
8. **Malicious Submission**: Attempt to submit art with a 5MB base64 string instead of a URL.
9. **Timestamp Spoofing**: Attempt to set a `createdAt` date in the past during registration.
10. **State Shortcutting**: Attempt to set a submission status to "reviewed" directly.
11. **Negative Following**: Attempt to create multiple follow interactions for the same project.
12. **PII Leak**: Attempt to read the full user document of another user (including email).

## Test Runner Plan
I will implement a set of rules that reject these payloads.
The rules will enforce:
- `request.auth.uid == userId`
- `isValidUser(incoming())`
- `incoming().keys().hasOnly(...)` for updates
- `resource.data.userId == request.auth.uid` for private reads.

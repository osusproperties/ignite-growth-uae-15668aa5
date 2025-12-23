# Free Trial Widget - Quick Test Guide

## 🧪 Testing the Implementation

### Step 1: Start the Development Server

```bash
npm run dev
```

### Step 2: Navigate to Test Pages

**Homepage:**
```
http://localhost:5173/
```
Scroll down to see the widget between ROI Calculator and Contact Form

**Pricing Page:**
```
http://localhost:5173/pricing
```
Scroll down past the pricing tiers and FAQ section

### Step 3: Test the Form

1. **Select a server location** from the dropdown:
   - 🇬🇧 UK, Manchester
   - 🇺🇸 US, Boston
   - 🇮🇳 IN, Mumbai
   - 🇧🇷 BR, São Paulo
   - 🇳🇱 NL, Meppel

2. **Enter a test email**:
   ```
   test@company.com
   ```

3. **Click "Start Free Trial Now"**

4. **Expected Behavior**:
   - Button shows "Submitting..."
   - Form submits to odoo4projects webhook
   - Success message appears with checkmark
   - Form disappears, replaced by success state
   - After 5 seconds, form resets

### Step 4: Verify Webhook Reception

Check with your odoo4projects team that they received:
```json
{
  "location": "manchester",
  "email": "test@company.com",
  "product": "odoo_19",
  "utm_source": "sgctechai",
  "utm_campaign": "trial_widget"
}
```

### Step 5: Mobile Testing

Open in mobile view (DevTools → Toggle device toolbar):
- **iPhone 12/13/14**: Should look crisp and centered
- **iPad**: Should maintain good spacing
- **Android phones**: Should be touch-friendly

### Step 6: Visual Verification Checklist

✅ **Logo Display**:
- [ ] SGC TECH AI logo visible
- [ ] Logo has glow effect
- [ ] Logo is centered in container

✅ **Form Styling**:
- [ ] Glass effect background
- [ ] Accent color borders
- [ ] Smooth transitions on hover
- [ ] Proper spacing between fields

✅ **Typography**:
- [ ] Title uses display font
- [ ] Labels are uppercase and small
- [ ] Readable font sizes

✅ **Interactions**:
- [ ] Dropdown opens smoothly
- [ ] Email field has focus state
- [ ] Button has hover effect
- [ ] Loading state shows

✅ **Success State**:
- [ ] Checkmark icon appears
- [ ] Success message displays
- [ ] Green color scheme
- [ ] Auto-reset works

### Step 7: Error Testing

Test error handling by:

**Option 1**: Disconnect internet and submit
- Should show error message in red

**Option 2**: Inspect and modify webhook URL temporarily to invalid
- Should gracefully handle failure

### 🐛 Common Issues & Fixes

**Issue**: Logo doesn't appear
- **Fix**: Check that `src/assets/sgc-logo.png` exists
- **Alternative**: Update import path in FreeTrialWidget.tsx

**Issue**: Webhook fails
- **Check**: Webhook URL is correct
- **Verify**: CORS is enabled on odoo4projects side
- **Test**: Try submitting from HTML version

**Issue**: Styling looks off
- **Check**: Tailwind classes are building correctly
- **Verify**: `npm run dev` is running
- **Clear**: Browser cache and hard refresh

**Issue**: Form doesn't submit
- **Check**: Browser console for errors
- **Verify**: All required fields are filled
- **Test**: Different browsers

### 📊 Analytics Tracking (Optional)

To track trial signups, add to `FreeTrialWidget.tsx`:

```typescript
// After successful submission
if (window.gtag) {
  window.gtag('event', 'trial_signup', {
    'event_category': 'conversion',
    'event_label': 'free_trial',
    'value': 1
  });
}
```

### 🎨 Customization Guide

**Change Colors**:
```tsx
// In FreeTrialWidget.tsx
className="bg-gradient-to-r from-accent to-accent/80"
// Change to any color from your theme
```

**Update Title**:
```tsx
<h3 className="text-2xl font-display font-bold text-foreground mb-2">
  Your Custom Title Here
</h3>
```

**Modify Regions**:
```tsx
<option value="dubai">🇦🇪 UAE, Dubai</option>
```

**Change Button Text**:
```tsx
<button type="submit">
  Try Free for 30 Days
</button>
```

### 📱 Device-Specific Testing

**Desktop (1920x1080)**:
```
Container max-width: 512px (max-w-lg)
Padding: 32px
Logo size: 64px
```

**Tablet (768x1024)**:
```
Container: Responsive
Padding: Maintained
Form: Full width within container
```

**Mobile (375x667)**:
```
Container: Near full width with margins
Padding: 24px
Logo: Same size (scales well)
Button: Full width
```

### 🚀 Go-Live Checklist

Before deploying to production:

- [ ] Test with real email addresses
- [ ] Verify odoo4projects receives data
- [ ] Test on Safari (iOS)
- [ ] Test on Chrome (Android)
- [ ] Check page load performance
- [ ] Verify Terms & Conditions link works
- [ ] Test keyboard navigation
- [ ] Check screen reader compatibility
- [ ] Verify HTTPS works (production)
- [ ] Monitor first 10 signups
- [ ] Set up conversion tracking
- [ ] Brief support team on trial process

### 💬 Support

If you encounter issues:

1. Check browser console for errors
2. Verify webhook URL is accessible
3. Test in incognito/private mode
4. Clear cache and cookies
5. Try different browser
6. Contact odoo4projects team

### 📈 Conversion Optimization Tips

**Week 1-2**: Monitor baseline
- Track view-to-submission rate
- Note drop-off points
- Collect user feedback

**Week 3-4**: A/B test variations
- Different button text
- Alternative headlines
- Color variations
- Field order changes

**Ongoing**: Iterate based on data
- Optimize for mobile if needed
- Adjust messaging
- Test placement on page
- Add urgency elements if low conversion

---

**Testing Complete?** ✅
**Webhook Verified?** ✅
**Ready to Deploy?** 🚀

---

*Last Updated: December 23, 2025*
*Component: FreeTrialWidget.tsx*
*Pages: Index.tsx, Pricing.tsx*
